import React, { useContext, useState } from "react";
import { CanContext } from "../context/CanContext";
import axios from "axios";
import { toast } from "react-toastify";

const BreastDiagnosis = () => {
  const [formData, setFormData] = useState({
  Age: "",
  BMI: "",
  Family_History_BC: "",
  BRCA_Mutation: "",
  Age_Menarche: "",
  Age_Menopause: "",
  Parity: "",
  Age_First_Child: "",
  Breastfeeding_History: "",
  Hormone_Replacement_Therapy: "",
  Oral_Contraceptive_Use: "",
  Radiation_Exposure: "",
  Smoking: "",
  Alcohol_Intake: "",
  Physical_Activity: "",
  Diet_Quality: "",
  Breast_Pain: "",
  Lump_Presence: "",
  Nipple_Discharge: "",
  Skin_Dimpling: "",
  Mammogram_Result: "",
  Ultrasound_Result: "",
  Biopsy_Result: "",
  Breast_Density: "",
  Menstrual_Irregularities: "",
  Obesity: "",
  Diabetes: "",
  Hypertension: "",
  Cholesterol: ""
});

  const [prediction, setPrediction] = useState("");

  const { backendUrl } = useContext(CanContext);

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prev) => ({...prev, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      backendUrl + "/api/model/predictBreast",
      formData
    );

    if (data.success) {
      setPrediction(data.prediction);
      toast.success(`Your test ${data.prediction} for breast cancer`);
    } else {
      console.log(data.message);
      toast.error(data.message);
    }

    // Reset the form in one line
    setFormData({
      Age: "",
  BMI: "",
  Family_History_BC: "",
  BRCA_Mutation: "",
  Age_Menarche: "",
  Age_Menopause: "",
  Parity: "",
  Age_First_Child: "",
  Breastfeeding_History: "",
  Hormone_Replacement_Therapy: "",
  Oral_Contraceptive_Use: "",
  Radiation_Exposure: "",
  Smoking: "",
  Alcohol_Intake: "",
  Physical_Activity: "",
  Diet_Quality: "",
  Breast_Pain: "",
  Lump_Presence: "",
  Nipple_Discharge: "",
  Skin_Dimpling: "",
  Mammogram_Result: "",
  Ultrasound_Result: "",
  Biopsy_Result: "",
  Breast_Density: "",
  Menstrual_Irregularities: "",
  Obesity: "",
  Diabetes: "",
  Hypertension: "",
  Cholesterol: ""
    });
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
};

  return (
    <div className="w-full my-28 flex lg:flex-row flex-col gap-20">
      <div className="flex-[50%] space-y-4">
        <p className="uppercase text-[12px] font-bold text-[#09A4AD]">
          Preemptive Breast Cancer Diagnosis
        </p>
        <p className="font-bold xl:text-[40px] text-[30px]">
          Get a free preemptive diagnosis by completing the form.
        </p>
        <p className="xl:text-[20px] text-[17px] font-medium">
          It's quick, secure, and could help identify early risk factors before
          symptoms appear. This tool is not a medical test but an early
          screening aid.
        </p>
      </div>

      <form
        onSubmit={onSubmitHandler}
        className="flex-[50%] w-full xl:w-[600px] lg:w-[450px] space-y-4 rounded-lg bg-white p-5"
      >
        {/* Patient ID */}


{/* Age */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Age</label>
  <input
    value={formData.Age}
    onChange={handleChange}
    name="Age"
    type="number"
    placeholder="Age"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* BMI */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">BMI</label>
  <input
    value={formData.BMI}
    onChange={handleChange}
    name="BMI"
    type="number"
    placeholder="BMI"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Family History */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Family History BC</label>
  <select
    value={formData.Family_History_BC}
    onChange={handleChange}
    name="Family_History_BC"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>



{/* BRCA Mutation */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">BRCA Mutation</label>
  <select
    value={formData.BRCA_Mutation}
    onChange={handleChange}
    name="BRCA_Mutation"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Age at Menarche */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Age at Menarche</label>
  <input
    type="number"
    name="Age_Menarche"
    value={formData.Age_Menarche}
    onChange={handleChange}
    placeholder="Enter Age at Menarche"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Age at Menopause */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Age at Menopause</label>
  <input
    type="number"
    name="Age_Menopause"
    value={formData.Age_Menopause}
    onChange={handleChange}
    placeholder="Enter Age at Menopause"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Parity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Parity</label>
  <input
    type="number"
    name="Parity"
    value={formData.Parity}
    onChange={handleChange}
    placeholder="Enter Parity"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Age First Child */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Age at First Child</label>
  <input
    type="number"
    name="Age_First_Child"
    value={formData.Age_First_Child}
    onChange={handleChange}
    placeholder="Enter Age at First Child"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Breastfeeding History */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Breastfeeding History</label>
  <select
    value={formData.Breastfeeding_History}
    onChange={handleChange}
    name="Breastfeeding_History"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Hormone Replacement Therapy */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Hormone Replacement Therapy</label>
  <select
    value={formData.Hormone_Replacement_Therapy}
    onChange={handleChange}
    name="Hormone_Replacement_Therapy"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Oral Contraceptive Use */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Oral Contraceptive Use</label>
  <select
    value={formData.Oral_Contraceptive_Use}
    onChange={handleChange}
    name="Oral_Contraceptive_Use"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Radiation Exposure */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Radiation Exposure</label>
  <select
    value={formData.Radiation_Exposure}
    onChange={handleChange}
    name="Radiation_Exposure"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Smoking */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Smoking</label>
  <select
    value={formData.Smoking}
    onChange={handleChange}
    name="Smoking"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Alcohol Intake */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Alcohol Intake</label>
  <input
    type="number"
    name="Alcohol_Intake"
    value={formData.Alcohol_Intake}
    onChange={handleChange}
    placeholder="Enter Alcohol Intake"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Physical Activity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Physical Activity</label>
  <input
    type="number"
    name="Physical_Activity"
    value={formData.Physical_Activity}
    onChange={handleChange}
    placeholder="Enter Physical Activity Level"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Diet Quality */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Diet Quality</label>
  <input
    type="number"
    name="Diet_Quality"
    value={formData.Diet_Quality}
    onChange={handleChange}
    placeholder="Enter Diet Quality"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Breast Pain */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Breast Pain</label>
  <select
    value={formData.Breast_Pain}
    onChange={handleChange}
    name="Breast_Pain"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Lump Presence */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Lump Presence</label>
  <select
    value={formData.Lump_Presence}
    onChange={handleChange}
    name="Lump_Presence"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Nipple Discharge */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Nipple Discharge</label>
  <select
    value={formData.Nipple_Discharge}
    onChange={handleChange}
    name="Nipple_Discharge"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Skin Dimpling */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Skin Dimpling</label>
  <select
    value={formData.Skin_Dimpling}
    onChange={handleChange}
    name="Skin_Dimpling"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Mammogram Result */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Mammogram Result</label>
  <select
    value={formData.Mammogram_Result}
    onChange={handleChange}
    name="Mammogram_Result"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Ultrasound Result */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Ultrasound Result</label>
  <select
    value={formData.Ultrasound_Result}
    onChange={handleChange}
    name="Ultrasound_Result"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Biopsy Result */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Biopsy Result</label>
  <select
    value={formData.Biopsy_Result}
    onChange={handleChange}
    name="Biopsy_Result"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Breast Density */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Breast Density</label>
  <input
    type="number"
    name="Breast_Density"
    value={formData.Breast_Density}
    onChange={handleChange}
    placeholder="Enter Breast Density"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Menstrual Irregularities */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Menstrual Irregularities</label>
  <select
    value={formData.Menstrual_Irregularities}
    onChange={handleChange}
    name="Menstrual_Irregularities"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Obesity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Obesity</label>
  <select
    value={formData.Obesity}
    onChange={handleChange}
    name="Obesity"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Diabetes */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Diabetes</label>
  <select
    value={formData.Diabetes}
    onChange={handleChange}
    name="Diabetes"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Hypertension */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Hypertension</label>
  <select
    value={formData.Hypertension}
    onChange={handleChange}
    name="Hypertension"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Cholesterol */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Cholesterol</label>
  <input
    type="number"
    name="Cholesterol"
    value={formData.Cholesterol}
    onChange={handleChange}
    placeholder="Enter Cholesterol"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>


        <button className="w-full bg-[#18A0A9] text-white py-3 rounded-lg">
          Submit Now
        </button>

        <div>Result:{prediction}</div>
      </form>
    </div>
  );
};

export default BreastDiagnosis;
