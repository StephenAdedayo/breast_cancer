// utils/generateArff.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateArff(data) {
  // Folder inside the same folder as this file
  const uploadsDir = path.join(__dirname, "uploads");

  // Create folder if it doesn't exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const tempFile = path.join(uploadsDir, `${uuidv4()}.arff`);

  const header = `
@relation prostate_cancer_prediction

@attribute Age numeric
@attribute Family_History {Yes,No}
@attribute Smoking {Yes,No}
@attribute Alcohol {Yes,No}
@attribute Physical_Activity {Low,Moderate,High}
@attribute Diabetes {Yes,No}
@attribute Hypertension {Yes,No}
@attribute Gleason_Score numeric
@attribute Bone_Pain {Yes,No}
@attribute Urinary_Symptoms {Yes,No}
@attribute Erectile_Dysfunction {Yes,No}
@attribute Ethnicity {African,Asian,Caucasian,Hispanic}
@attribute Marital_Status {Single,Married,Divorced,Widowed}
@attribute Education_Level {Primary,Secondary,Tertiary}
@attribute Residence {Urban,Rural}
@attribute Depression {Yes,No}
@attribute Sleep_Disorder {Yes,No}
@attribute Immune_Status {Strong,Weak}
@attribute Genetic_Mutation {Yes,No}
@attribute Cancer_Status {Positive,Negative}

@data
`;

  const row = [
    data.Age,
    data.Family_History,
    data.Smoking,
    data.Alcohol,
    data.Physical_Activity,
    data.Diabetes,
    data.Hypertension,
    data.Gleason_Score,
    data.Bone_Pain,
    data.Urinary_Symptoms,
    data.Erectile_Dysfunction,
    data.Ethnicity,
    data.Marital_Status,
    data.Education_Level,
    data.Residence,
    data.Depression,
    data.Sleep_Disorder,
    data.Immune_Status,
    data.Genetic_Mutation,
    "?" // Cancer_Status (class label, unknown for prediction)
  ].join(",");

  fs.writeFileSync(tempFile, header + row);
  return tempFile;
}
