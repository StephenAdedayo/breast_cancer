import React, { useContext, useState } from "react";
import { CanContext } from "../context/CanContext";
import axios from "axios";
import { toast } from "react-toastify";

const ProstateDiagnosis = () => {
  const [formData, setFormData] = useState({
    Patient_ID: "",
    Age: "",
    BMI: "",
    Family_History: "",
    Smoking: "",
    Alcohol: "",
    Physical_Activity: "",
    Diet: "",
    Diabetes: "",
    Hypertension: "",
    Stage: "",
    Treatment: "",
    PSA_Level: "",
    Gleason_Score: "",
    Bone_Pain: "",
    Urinary_Symptoms: "",
    Erectile_Dysfunction: "",
    Ethnicity: "",
    Marital_Status: "",
    Education_Level: "",
    Income_Level: "",
    Residence: "",
    Screening_History: "",
    Obesity: "",
    Cholesterol: "",
    Depression: "",
    Sleep_Disorder: "",
    Immune_Status: "",
    Genetic_Mutation: ""
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
      backendUrl + "/api/model/predict",
      formData
    );

    if (data.success) {
      setPrediction(data.prediction);
      toast.success(`Your test ${data.prediction} for prostate cancer`);
    } else {
      console.log(data.message);
      toast.error(data.message);
    }

    // Reset the form in one line
    setFormData({
      Patient_ID: "",
      Age: "",
      BMI: "",
      Family_History: "",
      Smoking: "",
      Alcohol: "",
      Physical_Activity: "",
      Diet: "",
      Diabetes: "",
      Hypertension: "",
      Stage: "",
      Treatment: "",
      PSA_Level: "",
      Gleason_Score: "",
      Bone_Pain: "",
      Urinary_Symptoms: "",
      Erectile_Dysfunction: "",
      Ethnicity: "",
      Marital_Status: "",
      Education_Level: "",
      Income_Level: "",
      Residence: "",
      Screening_History: "",
      Obesity: "",
      Cholesterol: "",
      Depression: "",
      Sleep_Disorder: "",
      Immune_Status: "",
      Genetic_Mutation: "",
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
          Preemptive Prostate Cancer Diagnosis
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
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Patient ID</label>
  <input
    value={formData.Patient_ID}
    onChange={handleChange}
    name="Patient_ID"
    type="text"
    placeholder="Patient ID"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

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
  <label className="text-[#979797]">Family History</label>
  <select
    value={formData.Family_History}
    onChange={handleChange}
    name="Family_History"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
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
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Alcohol */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Alcohol</label>
  <select
    value={formData.Alcohol}
    onChange={handleChange}
    name="Alcohol"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Physical Activity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Physical Activity</label>
  <select
    value={formData.Physical_Activity}
    onChange={handleChange}
    name="Physical_Activity"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Low/Moderate/High</option>
    <option value="Low">Low</option>
    <option value="Moderate">Moderate</option>
    <option value="High">High</option>
  </select>
</div>

{/* Diet */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Diet</label>
  <select
    value={formData.Diet}
    onChange={handleChange}
    name="Diet"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Unhealthy/Moderate/Healthy</option>
    <option value="Unhealthy">Unhealthy</option>
    <option value="Moderate">Moderate</option>
    <option value="Healthy">Healthy</option>
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
    <option value="Yes">Yes</option>
    <option value="No">No</option>
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
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Stage */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Stage</label>
  <select
    value={formData.Stage}
    onChange={handleChange}
    name="Stage"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Localized/Advanced/Metastatic</option>
    <option value="Localized">Localized</option>
    <option value="Advanced">Advanced</option>
    <option value="Metastatic">Metastatic</option>
  </select>
</div>

{/* Treatment */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Treatment</label>
  <select
    value={formData.Treatment}
    onChange={handleChange}
    name="Treatment"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Choose Treatment</option>
    <option value="Active Surveillance">Active Surveillance</option>
    <option value="Surgery">Surgery</option>
    <option value="Radiation">Radiation</option>
    <option value="Hormone Therapy">Hormone Therapy</option>
    <option value="Chemotherapy">Chemotherapy</option>
    <option value="Immunotherapy">Immunotherapy</option>
  </select>
</div>

{/* PSA Level */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">PSA Level</label>
  <input
    value={formData.PSA_Level}
    onChange={handleChange}
    name="PSA_Level"
    type="number"
    placeholder="PSA Level"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Gleason Score */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Gleason Score</label>
  <input
    value={formData.Gleason_Score}
    onChange={handleChange}
    name="Gleason_Score"
    type="number"
    placeholder="Gleason Score"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Bone Pain */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Bone Pain</label>
  <select
    value={formData.Bone_Pain}
    onChange={handleChange}
    name="Bone_Pain"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Urinary Symptoms */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Urinary Symptoms</label>
  <select
    value={formData.Urinary_Symptoms}
    onChange={handleChange}
    name="Urinary_Symptoms"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Erectile Dysfunction */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Erectile Dysfunction</label>
  <select
    value={formData.Erectile_Dysfunction}
    onChange={handleChange}
    name="Erectile_Dysfunction"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Ethnicity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Ethnicity</label>
  <select
    value={formData.Ethnicity}
    onChange={handleChange}
    name="Ethnicity"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select Ethnicity</option>
    <option value="African">African</option>
    <option value="Asian">Asian</option>
    <option value="Caucasian">Caucasian</option>
    <option value="Hispanic">Hispanic</option>
  </select>
</div>

{/* Marital Status */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Marital Status</label>
  <select
    value={formData.Marital_Status}
    onChange={handleChange}
    name="Marital_Status"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
    <option value="Widowed">Widowed</option>
  </select>
</div>

{/* Education Level */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Education Level</label>
  <select
    value={formData.Education_Level}
    onChange={handleChange}
    name="Education_Level"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select Education Level</option>
    <option value="Primary">Primary</option>
    <option value="Secondary">Secondary</option>
    <option value="Tertiary">Tertiary</option>
  </select>
</div>

{/* Income Level */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Income Level</label>
  <select
    value={formData.Income_Level}
    onChange={handleChange}
    name="Income_Level"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select Income Level</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
</div>

{/* Residence */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Residence</label>
  <select
    value={formData.Residence}
    onChange={handleChange}
    name="Residence"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select Residence</option>
    <option value="Urban">Urban</option>
    <option value="Rural">Rural</option>
  </select>
</div>

{/* Screening History */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Screening History</label>
  <select
    value={formData.Screening_History}
    onChange={handleChange}
    name="Screening_History"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
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
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Cholesterol */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Cholesterol</label>
  <select
    value={formData.Cholesterol}
    onChange={handleChange}
    name="Cholesterol"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Normal/High</option>
    <option value="Normal">Normal</option>
    <option value="High">High</option>
  </select>
</div>

{/* Depression */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Depression</label>
  <select
    value={formData.Depression}
    onChange={handleChange}
    name="Depression"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Sleep Disorder */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Sleep Disorder</label>
  <select
    value={formData.Sleep_Disorder}
    onChange={handleChange}
    name="Sleep_Disorder"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Immune Status */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Immune Status</label>
  <select
    value={formData.Immune_Status}
    onChange={handleChange}
    name="Immune_Status"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Strong/Weak</option>
    <option value="Strong">Strong</option>
    <option value="Weak">Weak</option>
  </select>
</div>

{/* Genetic Mutation */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Genetic Mutation</label>
  <select
    value={formData.Genetic_Mutation}
    onChange={handleChange}
    name="Genetic_Mutation"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


        <button className="w-full bg-[#18A0A9] text-white py-3 rounded-lg">
          Submit Now
        </button>

        <div>Result:{prediction}</div>
      </form>
    </div>
  );
};

export default ProstateDiagnosis;
