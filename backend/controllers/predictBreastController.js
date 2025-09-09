import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { generateBreastArff } from "../br/generateBreastARFF.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// POST /api/predict
export const predictBreastCancer = async (req, res) => {
  try {
    const inputData = req.body;

    // 1. Generate a unique ARFF file for this request
    const inputArffPath = generateBreastArff(inputData);

    // 2. Define paths
    const modelPath = path.join(__dirname, "../br/breast_cancer.model");
    const wekaJarPath = path.join(__dirname, "../br/weka.jar");

    // 3. Build the Java command
    const command = `java -cp "${path.dirname(modelPath)}${
      process.platform === "win32" ? ";" : ":"
    }${wekaJarPath}" WekaPredictor "${modelPath}" "${inputArffPath}"`;

    // 4. Run prediction
    exec(command, (error, stdout, stderr) => {
      // Delete temp file after prediction attempt
      fs.unlink(inputArffPath, () => {});

      if (error) {
        console.error("Error executing Java Weka:", stderr);
        return res.status(500).json({
          success: false,
          error: "Prediction failed. Check Java or model files.",
        });
      }

      console.log("Raw Weka Output:", stdout);

      // Normalize prediction result
      const output = stdout.trim().toLowerCase();
      let result;

      if (output.includes("positive")) {
        result = "Positive";
      } else if (output.includes("negative")) {
        result = "Negative";
      } else {
        result = "unknown";
      }

      res.json({ success: true, prediction: result });
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res
      .status(500)
      .json({ success: false, error: "Server error occurred" });
  }
};
