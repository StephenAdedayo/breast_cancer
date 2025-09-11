import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { generateArff } from "../ml/generateARFF.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to Java inside Docker
const JAVA_PATH = "/usr/lib/jvm/java-11-openjdk-amd64/bin/java";

export const predictProstateCancer = async (req, res) => {
  try {
    const inputData = req.body;

    const inputArffPath = generateArff(inputData);
    const modelPath = path.join(__dirname, "../ml/prostate_cancer.model");
    const wekaJarPath = path.join(__dirname, "../ml/weka.jar");

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
