// utils/generateBreastArff.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateBreastArff(data) {
  try {
    const uploadsDir = path.join(__dirname, "uploads");

    // Ensure uploads folder exists
    fs.mkdirSync(uploadsDir, { recursive: true });

    const tempFile = path.join(uploadsDir, `${uuidv4()}.arff`);

    const header = `
@relation breast_cancer_prediction

@attribute Age numeric
@attribute Family_History_BC {0,1}
@attribute Age_Menopause numeric
@attribute Breastfeeding_History {0,1}
@attribute Hormone_Replacement_Therapy {0,1}
@attribute Oral_Contraceptive_Use {0,1}
@attribute Radiation_Exposure {0,1}
@attribute Alcohol_Intake numeric
@attribute Physical_Activity numeric
@attribute Diet_Quality numeric
@attribute Breast_Pain {0,1}
@attribute Lump_Presence {0,1}
@attribute Nipple_Discharge {0,1}
@attribute Ultrasound_Result {0,1}
@attribute Breast_Density numeric
@attribute Menstrual_Irregularities {0,1}
@attribute Diabetes {0,1}
@attribute Cholesterol numeric
@attribute Cancer_Status {Positive,Negative}

@data
`;

    const row = [
      data.Age,
      data.Family_History_BC,
      data.Age_Menopause,
      data.Breastfeeding_History,
      data.Hormone_Replacement_Therapy,
      data.Oral_Contraceptive_Use,
      data.Radiation_Exposure,
      data.Alcohol_Intake,
      data.Physical_Activity,
      data.Diet_Quality,
      data.Breast_Pain,
      data.Lump_Presence,
      data.Nipple_Discharge,
      data.Ultrasound_Result,
      data.Breast_Density,
      data.Menstrual_Irregularities,
      data.Diabetes,
      data.Cholesterol,
      "?" // class label (prediction target)
    ].join(",");

    fs.writeFileSync(tempFile, header + row);
    return tempFile;
  } catch (err) {
    console.error("Failed to generate ARFF file:", err);
    throw err;
  }
}
