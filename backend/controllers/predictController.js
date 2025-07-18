import { exec } from 'child_process';
import path from 'path';
import { generateArff } from '../ml/generateARFF.js'; // adjust path if needed
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// POST /api/predict
export const predictProstateCancer = async (req, res) => {
  try {
    const inputData = req.body;

    // 1. Generate ARFF file
    generateArff(inputData);  // creates ml/input.arff

    // 2. Set paths for model and arff file
    const modelPath = path.join(__dirname, '../ml/svm.model');
    const inputArffPath = path.join(__dirname, '../ml/input.arff');
    const wekaJarPath = path.join(__dirname, '../ml/weka.jar');

    // 3. Build the Java command
    const command = `java -cp "${path.dirname(modelPath)}${process.platform === 'win32' ? ';' : ':'}${wekaJarPath}" WekaPredictor ${modelPath} ${inputArffPath}`;

    // 4. Run the prediction
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing Java Weka:', stderr);
        return res.status(500).json({ success: false, error: 'Prediction failed. Check Java or model files.' });
      }

      console.log(stdout);
      

      const result = stdout.trim() === 'Yes' ? "positive" : "negative"; // e.g. "yes" or "no"
      
      res.json({ success: true, prediction: result });
    });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ success: false, error: 'Server error occurred' });
  }
};
