import React, { useContext, useState } from "react";
import { CanContext } from "../context/CanContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";


const BreastDiagnosis = () => {
 const [formData, setFormData] = useState({
  Age: "",
  Family_History_BC: "",
  Age_Menopause: "",
  Breastfeeding_History: "",
  Hormone_Replacement_Therapy: "",
  Oral_Contraceptive_Use: "",
  Radiation_Exposure: "",
  Alcohol_Intake: "",
  Physical_Activity: "",
  Diet_Quality: "",
  Breast_Pain: "",
  Lump_Presence: "",
  Nipple_Discharge: "",
  Ultrasound_Result: "",
  Breast_Density: "",
  Menstrual_Irregularities: "",
  Diabetes: "",
  Cholesterol: ""
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
      backendUrl + "/api/model/predictBreast",
      formData
    );

    if (data.success) {
      setLoading(false)
      setPrediction(data.prediction);
      toast.success(`You test ${data.prediction} for breast cancer`);
    } else {
      console.log(data.message);
      toast.error(data.message);
    }

    // Reset the form in one line
    setFormData({
 Age: "",
  Family_History_BC: "",
  Age_Menopause: "",
  Breastfeeding_History: "",
  Hormone_Replacement_Therapy: "",
  Oral_Contraceptive_Use: "",
  Radiation_Exposure: "",
  Alcohol_Intake: "",
  Physical_Activity: "",
  Diet_Quality: "",
  Breast_Pain: "",
  Lump_Presence: "",
  Nipple_Discharge: "",
  Ultrasound_Result: "",
  Breast_Density: "",
  Menstrual_Irregularities: "",
  Diabetes: "",
  Cholesterol: ""
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
{/* Age */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your age?</label>
  <input
    value={formData.Age}
    onChange={handleChange}
    name="Age"
    type="number"
    placeholder="Enter your age"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Family History of Breast Cancer */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have a family history of breast cancer?</label>
  <select
    value={formData.Family_History_BC}
    onChange={handleChange}
    name="Family_History_BC"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Age at Menopause */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">At what age did you reach menopause (if you have already experienced it)?
</label>
  <input
    type="number"
    name="Age_Menopause"
    value={formData.Age_Menopause}
    onChange={handleChange}
    placeholder="Enter age at menopause"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Breastfeeding History */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you ever breastfed?</label>
  <select
    value={formData.Breastfeeding_History}
    onChange={handleChange}
    name="Breastfeeding_History"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Hormone Replacement Therapy */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you undergone hormone replacement therapy?</label>
  <select
    value={formData.Hormone_Replacement_Therapy}
    onChange={handleChange}
    name="Hormone_Replacement_Therapy"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Oral Contraceptive Use */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you ever used oral contraceptives?</label>
  <select
    value={formData.Oral_Contraceptive_Use}
    onChange={handleChange}
    name="Oral_Contraceptive_Use"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Radiation Exposure */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you ever been exposed to radiation?</label>
  <select
    value={formData.Radiation_Exposure}
    onChange={handleChange}
    name="Radiation_Exposure"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Alcohol Intake */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How often do you consume alcohol? (units/week)</label>
  <input
    type="number"
    name="Alcohol_Intake"
    value={formData.Alcohol_Intake}
    onChange={handleChange}
    placeholder="Enter alcohol intake"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Physical Activity */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How many days per week are you physically active?</label>
  <input
    type="number"
    name="Physical_Activity"
    value={formData.Physical_Activity}
    onChange={handleChange}
    placeholder="Enter number of days"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Diet Quality */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">How would you rate your diet quality?</label>
  <input
    type="number"
    name="Diet_Quality"
    value={formData.Diet_Quality}
    onChange={handleChange}
    placeholder="Scale 1–10"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Breast Pain */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you experience breast pain?</label>
  <select
    value={formData.Breast_Pain}
    onChange={handleChange}
    name="Breast_Pain"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Lump Presence */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you noticed a lump in your breast?</label>
  <select
    value={formData.Lump_Presence}
    onChange={handleChange}
    name="Lump_Presence"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Nipple Discharge */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you experience nipple discharge?</label>
  <select
    value={formData.Nipple_Discharge}
    onChange={handleChange}
    name="Nipple_Discharge"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Ultrasound Result */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Have you ever had an ultrasound scan? If yes, did it show anything unusual?</label>
  <select
    value={formData.Ultrasound_Result}
    onChange={handleChange}
    name="Ultrasound_Result"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Breast Density */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your breast density level?</label>
  <input
    type="number"
    name="Breast_Density"
    value={formData.Breast_Density}
    onChange={handleChange}
    placeholder="Scale 1–10"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>

{/* Menstrual Irregularities */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have menstrual irregularities?</label>
  <select
    value={formData.Menstrual_Irregularities}
    onChange={handleChange}
    name="Menstrual_Irregularities"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Diabetes */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">Do you have diabetes?</label>
  <select
    value={formData.Diabetes}
    onChange={handleChange}
    name="Diabetes"
    className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
  >
    <option value="" disabled>Select an option</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

{/* Cholesterol */}
<div className="flex flex-col gap-2">
  <label className="text-[#979797]">What is your cholesterol level? </label>
  <input
    type="number"
    name="Cholesterol"
    value={formData.Cholesterol}
    onChange={handleChange}
    placeholder="Enter cholesterol level"
    className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
  />
</div>



        <button className="w-full bg-[#18A0A9] text-white py-3 rounded-lg">
          Submit Now
        </button>

        <div>Result: <span className="uppercase">{prediction}</span></div>
      </form>
    </div>
  );
};

export default BreastDiagnosis;
