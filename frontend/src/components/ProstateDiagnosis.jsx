import React, { useContext, useState } from "react";
import { CanContext } from "../context/CanContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const ProstateDiagnosis = () => {
  const [formData, setFormData] = useState({
    Age: "",
  Family_History: "",
  Smoking: "",
  Alcohol: "",
  Physical_Activity: "",
  Diabetes: "",
  Hypertension: "",
  Gleason_Score: "",
  Bone_Pain: "",
  Urinary_Symptoms: "",
  Erectile_Dysfunction: "",
  Ethnicity: "",
  Marital_Status: "",
  Education_Level: "",
  Residence: "",
  Depression: "",
  Sleep_Disorder: "",
  Immune_Status: "",
  Genetic_Mutation: ""
  });
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false)

  const { backendUrl } = useContext(CanContext);

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prev) => ({...prev, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
    setLoading(true)
  e.preventDefault();
  try {
    const { data } = await axios.post(
      backendUrl + "/api/model/predict",
      formData
    );

    if (data.success) {
      setLoading(false)
      setPrediction(data.prediction);
      toast.success(`Your test ${data.prediction} for prostate cancer`);
    } else {
      console.log(data.message);
      toast.error(data.message);
    }

    // Reset the form in one line
    setFormData({
       Age: "",
  Family_History: "",
  Smoking: "",
  Alcohol: "",
  Physical_Activity: "",
  Diabetes: "",
  Hypertension: "",
  Gleason_Score: "",
  Bone_Pain: "",
  Urinary_Symptoms: "",
  Erectile_Dysfunction: "",
  Ethnicity: "",
  Marital_Status: "",
  Education_Level: "",
  Residence: "",
  Depression: "",
  Sleep_Disorder: "",
  Immune_Status: "",
  Genetic_Mutation: ""
    });
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
};

if(loading){
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 grid place-items-center bg-[#EFFBFF]/70 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <img
          src={assets.health} // make sure to replace with your actual image path
          alt="Loading..."
          className="size-[40px]   animate-pulse"
        />
      </div>
    </div>
)}

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
{/* Age */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How old are you?</label>
  <input
    value={formData.Age}
    onChange={handleChange}
    name="Age"
    type="number"
    placeholder="Enter your age"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Family History */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have a family history of prostate cancer?</label>
  <select
    value={formData.Family_History}
    onChange={handleChange}
    name="Family_History"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Smoking */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you smoke?</label>
  <select
    value={formData.Smoking}
    onChange={handleChange}
    name="Smoking"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Alcohol */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you consume alcohol?</label>
  <select
    value={formData.Alcohol}
    onChange={handleChange}
    name="Alcohol"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Physical Activity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How would you describe your physical activity level?</label>
  <select
    value={formData.Physical_Activity}
    onChange={handleChange}
    name="Physical_Activity"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Low">Low</option>
    <option value="Moderate">Moderate</option>
    <option value="High">High</option>
  </select>
</div>

{/* Diabetes */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you been diagnosed with diabetes?</label>
  <select
    value={formData.Diabetes}
    onChange={handleChange}
    name="Diabetes"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Hypertension */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have hypertension (high blood pressure)?</label>
  <select
    value={formData.Hypertension}
    onChange={handleChange}
    name="Hypertension"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Gleason Score */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your Gleason score?</label>
  <input
    value={formData.Gleason_Score}
    onChange={handleChange}
    name="Gleason_Score"
    type="number"
    placeholder="Enter Gleason score"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Bone Pain */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you experience bone pain?</label>
  <select
    value={formData.Bone_Pain}
    onChange={handleChange}
    name="Bone_Pain"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Urinary Symptoms */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have urinary symptoms (frequent urination, weak stream)?</label>
  <select
    value={formData.Urinary_Symptoms}
    onChange={handleChange}
    name="Urinary_Symptoms"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Erectile Dysfunction */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you experience erectile dysfunction?</label>
  <select
    value={formData.Erectile_Dysfunction}
    onChange={handleChange}
    name="Erectile_Dysfunction"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Ethnicity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your ethnicity?</label>
  <select
    value={formData.Ethnicity}
    onChange={handleChange}
    name="Ethnicity"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="African">African</option>
    <option value="Asian">Asian</option>
    <option value="Caucasian">Caucasian</option>
    <option value="Hispanic">Hispanic</option>
  </select>
</div>

{/* Marital Status */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your marital status?</label>
  <select
    value={formData.Marital_Status}
    onChange={handleChange}
    name="Marital_Status"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
    <option value="Widowed">Widowed</option>
  </select>
</div>

{/* Education Level */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your highest education level?</label>
  <select
    value={formData.Education_Level}
    onChange={handleChange}
    name="Education_Level"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Primary">Primary</option>
    <option value="Secondary">Secondary</option>
    <option value="Tertiary">Tertiary</option>
  </select>
</div>

{/* Residence */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Where do you live?</label>
  <select
    value={formData.Residence}
    onChange={handleChange}
    name="Residence"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Urban">Urban</option>
    <option value="Rural">Rural</option>
  </select>
</div>

{/* Depression */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you ever been diagnosed with depression?</label>
  <select
    value={formData.Depression}
    onChange={handleChange}
    name="Depression"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Sleep Disorder */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you experience sleep disorders (insomnia, apnea)?</label>
  <select
    value={formData.Sleep_Disorder}
    onChange={handleChange}
    name="Sleep_Disorder"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

{/* Immune Status */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How would you describe your immune system?</label>
  <select
    value={formData.Immune_Status}
    onChange={handleChange}
    name="Immune_Status"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Strong">Strong</option>
    <option value="Weak">Weak</option>
  </select>
</div>

{/* Genetic Mutation */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you tested positive for genetic mutations linked to prostate cancer?</label>
  <select
    value={formData.Genetic_Mutation}
    onChange={handleChange}
    name="Genetic_Mutation"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


        <button className="w-full bg-[#18A0A9] text-white py-3 rounded-lg">
          Submit Now
        </button>

        <div>Result: <span className="uppercase">{prediction}</span></div>
      </form>
    </div>
  );
};

export default ProstateDiagnosis;
