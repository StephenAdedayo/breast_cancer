import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { generateBreastArff } from "../br/generateBreastARFF.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JAVA_PATH = "/usr/lib/jvm/java-11-openjdk-amd64/bin/java";

export const predictBreastCancer = async (req, res) => {
  try {
    const inputData = req.body;

    const inputArffPath = generateBreastArff(inputData);
    const modelPath = path.join(__dirname, "../br/breast_cancer.model");
    const wekaJarPath = path.join(__dirname, "../br/weka.jar");

    const command = `${JAVA_PATH} -cp "${path.dirname(modelPath)}:${wekaJarPath}" WekaPredictor "${modelPath}" "${inputArffPath}"`;

    exec(command, (error, stdout, stderr) => {
      fs.unlink(inputArffPath, () => {});

      if (error) {
        console.error("Error executing Java Weka:", stderr);
        return res.status(500).json({
          success: false,
          error: "Prediction failed. Check Java or model files.",
        });
      }

      const output = stdout.trim().toLowerCase();
      let result = "unknown";
      if (output.includes("positive")) result = "Positive";
      else if (output.includes("negative")) result = "Negative";

      res.json({ success: true, prediction: result });
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ success: false, error: "Server error occurred" });
  }
};
