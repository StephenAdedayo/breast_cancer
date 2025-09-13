import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { generateBreastArff } from "../br/generateBreastARFF.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const predictBreastCancer = async (req, res) => {
  try {
    const inputData = req.body;

    // Generate ARFF file
    const inputArffPath = generateBreastArff(inputData);

    // Paths
    const modelPath = path.join(__dirname, "../br/breast_cancer.model");
    const wekaJarPath = path.join(__dirname, "../br/weka.jar");

    // Detect platform for correct classpath separator
    const sep = process.platform === "win32" ? ";" : ":";

    // Java command
    const command = `java -cp ".${sep}${path.dirname(modelPath)}${sep}${wekaJarPath}" br.WekaPredictor "${modelPath}" "${inputArffPath}"`;

    exec(command, (error, stdout, stderr) => {
      // Delete ARFF
      fs.unlink(inputArffPath, () => {});

      if (error) {
        console.error("Error executing Java Weka:", stderr || error.message);
        return res.status(500).json({
          success: false,
          error: "Prediction failed. Check Java or model files.",
        });
      }

      console.log("Raw Weka Output:", stdout);

      // Normalize
      const output = stdout.trim().toLowerCase();
      let result;
      if (output.includes("positive")) result = "Positive";
      else if (output.includes("negative")) result = "Negative";
      else result = "unknown";

      res.json({ success: true, prediction: result });
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ success: false, error: "Server error occurred" });
  }
};
