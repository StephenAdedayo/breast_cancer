

// utils/generateArff.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export function generateArff(data) {
  const tempFile = path.join("uploads", `${uuidv4()}.arff`);

  const header = `
@relation prostate_cancer_prediction

@attribute Patient_ID string
@attribute Age numeric
@attribute BMI numeric
@attribute Family_History {Yes,No}
@attribute Smoking {Yes,No}
@attribute Alcohol {Yes,No}
@attribute Physical_Activity {Low,Moderate,High}
@attribute Diet {Unhealthy,Moderate,Healthy}
@attribute Diabetes {Yes,No}
@attribute Hypertension {Yes,No}
@attribute Stage {Localized,Advanced,Metastatic}
@attribute Treatment {'Active Surveillance',Surgery,Radiation,'Hormone Therapy',Chemotherapy,Immunotherapy}
@attribute PSA_Level numeric
@attribute Gleason_Score numeric
@attribute Bone_Pain {Yes,No}
@attribute Urinary_Symptoms {Yes,No}
@attribute Erectile_Dysfunction {Yes,No}
@attribute Ethnicity {African,Asian,Caucasian,Hispanic}
@attribute Marital_Status {Single,Married,Divorced,Widowed}
@attribute Education_Level {Primary,Secondary,Tertiary}
@attribute Income_Level {Low,Medium,High}
@attribute Residence {Urban,Rural}
@attribute Screening_History {Yes,No}
@attribute Obesity {Yes,No}
@attribute Cholesterol {Normal,High}
@attribute Depression {Yes,No}
@attribute Sleep_Disorder {Yes,No}
@attribute Immune_Status {Strong,Weak}
@attribute Genetic_Mutation {Yes,No}
@attribute Cancer_Status {Positive,Negative}

@data
`;

  const quote = (val) => (val.includes(" ") ? `'${val}'` : val);

  const row = [
    `"${data.Patient_ID}"`,
    data.Age,
    data.BMI,
    data.Family_History,
    data.Smoking,
    data.Alcohol,
    data.Physical_Activity,
    data.Diet,
    data.Diabetes,
    data.Hypertension,
    data.Stage,
    quote(data.Treatment), // special handling for spaces
    data.PSA_Level,
    data.Gleason_Score,
    data.Bone_Pain,
    data.Urinary_Symptoms,
    data.Erectile_Dysfunction,
    data.Ethnicity,
    data.Marital_Status,
    data.Education_Level,
    data.Income_Level,
    data.Residence,
    data.Screening_History,
    data.Obesity,
    data.Cholesterol,
    data.Depression,
    data.Sleep_Disorder,
    data.Immune_Status,
    data.Genetic_Mutation,
    "?" // class label to predict
  ].join(",");

  fs.writeFileSync(tempFile, header + row);
  return tempFile;
}
