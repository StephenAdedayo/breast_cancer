// utils/generateArffBreast.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export function generateBreastArff(data) {
  const tempFile = path.join("uploads", `${uuidv4()}.arff`);

  const header = `
@relation breast_cancer_prediction

@attribute Age numeric
@attribute BMI numeric
@attribute Family_History_BC {0,1}
@attribute BRCA_Mutation {0,1}
@attribute Age_Menarche numeric
@attribute Age_Menopause numeric
@attribute Parity numeric
@attribute Age_First_Child numeric
@attribute Breastfeeding_History {0,1}
@attribute Hormone_Replacement_Therapy {0,1}
@attribute Oral_Contraceptive_Use {0,1}
@attribute Radiation_Exposure {0,1}
@attribute Smoking {0,1}
@attribute Alcohol_Intake numeric
@attribute Physical_Activity numeric
@attribute Diet_Quality numeric
@attribute Breast_Pain {0,1}
@attribute Lump_Presence {0,1}
@attribute Nipple_Discharge {0,1}
@attribute Skin_Dimpling {0,1}
@attribute Mammogram_Result {0,1}
@attribute Ultrasound_Result {0,1}
@attribute Biopsy_Result {0,1}
@attribute Breast_Density numeric
@attribute Menstrual_Irregularities {0,1}
@attribute Obesity {0,1}
@attribute Diabetes {0,1}
@attribute Hypertension {0,1}
@attribute Cholesterol numeric
@attribute Cancer_Status {Positive,Negative}

@data
`;

  const row = [
    data.Age,
    data.BMI,
    data.Family_History_BC,
    data.BRCA_Mutation,
    data.Age_Menarche,
    data.Age_Menopause,
    data.Parity,
    data.Age_First_Child,
    data.Breastfeeding_History,
    data.Hormone_Replacement_Therapy,
    data.Oral_Contraceptive_Use,
    data.Radiation_Exposure,
    data.Smoking,
    data.Alcohol_Intake,
    data.Physical_Activity,
    data.Diet_Quality,
    data.Breast_Pain,
    data.Lump_Presence,
    data.Nipple_Discharge,
    data.Skin_Dimpling,
    data.Mammogram_Result,
    data.Ultrasound_Result,
    data.Biopsy_Result,
    data.Breast_Density,
    data.Menstrual_Irregularities,
    data.Obesity,
    data.Diabetes,
    data.Hypertension,
    data.Cholesterol,
    "?" // class label to predict
  ].join(",");

  fs.writeFileSync(tempFile, header + row);
  return tempFile;
}
