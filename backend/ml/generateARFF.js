import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateArff = (inputObj) => {
  const filePath = path.join(__dirname, 'input.arff');

  const header = `@relation prostate_cancer_prediction

@attribute Patient_ID string
@attribute Age numeric
@attribute Family_History {Yes,No}
@attribute Race_African_Ancestry {Yes,No}
@attribute PSA_Level numeric
@attribute DRE_Result {Normal,Abnormal}
@attribute Biopsy_Result {Benign,Malignant}
@attribute Difficulty_Urinating {Yes,No}
@attribute Weak_Urine_Flow {Yes,No}
@attribute Blood_in_Urine {Yes,No}
@attribute Pelvic_Pain {Yes,No}
@attribute Back_Pain {Yes,No}
@attribute Erectile_Dysfunction {Yes,No}
@attribute Cancer_Stage {Localized,Advanced,Metastatic}
@attribute Treatment_Recommended {"Active Surveillance","Radiation","Immunotherapy","Chemotherapy","Surgery","Hormone Therapy"}
@attribute Survival_5_Years {Yes,No}
@attribute Exercise_Regularly {Yes,No}
@attribute Healthy_Diet {Yes,No}
@attribute BMI numeric
@attribute Smoking_History {Yes,No}
@attribute Alcohol_Consumption {Low,Moderate,High}
@attribute Hypertension {Yes,No}
@attribute Diabetes {Yes,No}
@attribute Cholesterol_Level {Normal,High}
@attribute Screening_Age numeric
@attribute Follow_Up_Required {Yes,No}
@attribute Prostate_Volume numeric
@attribute Genetic_Risk_Factors {Yes,No}
@attribute Previous_Cancer_History {Yes,No}
@attribute Early_Detection {Yes,No}

@data

`;

  // Quote Patient_ID and Treatment_Recommended only
  const quote = (val) => `"${val}"`;

  const row = [
    quote(inputObj.Patient_ID),
    inputObj.Age,
    inputObj.Family_History,
    inputObj.Race_African_Ancestry,
    inputObj.PSA_Level,
    inputObj.DRE_Result,
    inputObj.Biopsy_Result,
    inputObj.Difficulty_Urinating,
    inputObj.Weak_Urine_Flow,
    inputObj.Blood_in_Urine,
    inputObj.Pelvic_Pain,
    inputObj.Back_Pain,
    inputObj.Erectile_Dysfunction,
    inputObj.Cancer_Stage,
    quote(inputObj.Treatment_Recommended),
    inputObj.Survival_5_Years,
    inputObj.Exercise_Regularly,
    inputObj.Healthy_Diet,
    inputObj.BMI,
    inputObj.Smoking_History,
    inputObj.Alcohol_Consumption,
    inputObj.Hypertension,
    inputObj.Diabetes,
    inputObj.Cholesterol_Level,
    inputObj.Screening_Age,
    inputObj.Follow_Up_Required,
    inputObj.Prostate_Volume,
    inputObj.Genetic_Risk_Factors,
    inputObj.Previous_Cancer_History,
    inputObj.Early_Detection,
    '?'  // class label unknown
  ].join(',');

  const content = header + row;

  fs.writeFileSync(filePath, content);
};
