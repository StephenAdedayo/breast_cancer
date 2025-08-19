import React, { useContext, useState } from "react";
import { CanContext } from "../context/CanContext";
import axios from "axios";
import { toast } from "react-toastify";

const Diagnosis = () => {
  const [Patient_ID, setPatient_ID] = useState("");
  const [Age, setAge] = useState("");
  const [Family_History, setFamily_History] = useState("");
  const [Race_African_Ancestry, setRace_African_Ancestry] = useState("");
  const [PSA_Level, setPSA_Level] = useState("");
  const [DRE_Result, setDRE_Result] = useState("");
  const [Biopsy_Result, setBiopsy_Result] = useState("");
  const [Difficulty_Urinating, setDifficulty_Urinating] = useState("");
  const [Weak_Urine_Flow, setWeak_Urine_Flow] = useState("");
  const [Blood_in_Urine, setBlood_in_Urine] = useState("");
  const [Pelvic_Pain, setPelvic_Pain] = useState("");
  const [Back_Pain, setBack_Pain] = useState("");
  const [Erectile_Dysfunction, setErectile_Dysfunction] = useState("");
  const [Cancer_Stage, setCancer_Stage] = useState("");
  const [Treatment_Recommended, setTreatment_Recommended] = useState("");
  const [Survival_5_Years, setSurvival_5_Years] = useState("");
  const [Exercise_Regularly, setExercise_Regularly] = useState("");
  const [Healthy_Diet, setHealthy_Diet] = useState("");
  const [BMI, setBMI] = useState("");
  const [Smoking_History, setSmoking_History] = useState("");
  const [Alcohol_Consumption, setAlcohol_Consumption] = useState("");
  const [Hypertension, setHypertension] = useState("");
  const [Diabetes, setDiabetes] = useState("");
  const [Cholesterol_Level, setCholesterol_Level] = useState("");
  const [Screening_Age, setScreening_Age] = useState("");
  const [Follow_Up_Required, setFollow_Up_Required] = useState("");
  const [Prostate_Volume, setProstate_Volume] = useState("");
  const [Genetic_Risk_Factors, setGenetic_Risk_Factors] = useState("");
  const [Previous_Cancer_History, setPrevious_Cancer_History] = useState("");
  const [Early_Detection, setEarly_Detection] = useState("");
  const [prediction, setPrediction] = useState("");

  const { backendUrl } = useContext(CanContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        Patient_ID,
        Age,
        Family_History,
        Race_African_Ancestry,
        PSA_Level,
        DRE_Result,
        Biopsy_Result,
        Difficulty_Urinating,
        Weak_Urine_Flow,
        Blood_in_Urine,
        Pelvic_Pain,
        Back_Pain,
        Erectile_Dysfunction,
        Cancer_Stage,
        Treatment_Recommended,
        Survival_5_Years,
        Exercise_Regularly,
        Healthy_Diet,
        BMI,
        Smoking_History,
        Alcohol_Consumption,
        Hypertension,
        Diabetes,
        Cholesterol_Level,
        Screening_Age,
        Follow_Up_Required,
        Prostate_Volume,
        Genetic_Risk_Factors,
        Previous_Cancer_History,
        Early_Detection,
      };

      const { data } = await axios.post(
        backendUrl + "/api/model/predict",
        formData
      );
      if (data.success) {
        setPrediction(data.prediction);
        toast.success(`You test ${data.prediction} for prostate cancer`);
      } else {
        console.log(data.message);
        toast.error(data.message);
      }

      setPatient_ID("");
      setAge("");
      setFamily_History("");
      setRace_African_Ancestry("");
      setPSA_Level("");
      setDRE_Result("");
      setBiopsy_Result("");
      setDifficulty_Urinating("");
      setWeak_Urine_Flow("");
      setBlood_in_Urine("");
      setPelvic_Pain("");
      setBack_Pain("");
      setErectile_Dysfunction("");
      setCancer_Stage("");
      setTreatment_Recommended("");
      setSurvival_5_Years("");
      setExercise_Regularly("");
      setHealthy_Diet("");
      setBMI("");
      setSmoking_History("");
      setAlcohol_Consumption("");
      setHypertension("");
      setDiabetes("");
      setCholesterol_Level("");
      setScreening_Age("");
      setFollow_Up_Required("");
      setProstate_Volume("");
      setGenetic_Risk_Factors("");
      setPrevious_Cancer_History("");
      setEarly_Detection("");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full my-28 flex lg:flex-row flex-col gap-20">
      <div className="flex-[70%] space-y-4">
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
        className="flex-[30%] w-full xl:w-[600px] lg:w-[450px] space-y-4 rounded-lg bg-white p-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#979797]">
            Patient ID
          </label>
          <input
            value={Patient_ID}
            onChange={(e) => setPatient_ID(e.target.value)}
            type="text"
            placeholder="Patient ID"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-[#979797]">
            Age
          </label>
          <input
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Age"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-[#979797]'>Gender</label>
             <select name="" id="" className='outline-none border text-[#979797] rounded-lg border-[#D9D9D9] px-2 py-2'>
            <option value="" disabled>Male/Female</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
         </div> */}

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you have a family history of prostate cancer?
          </label>
          <select
            value={Family_History}
            onChange={(e) => setFamily_History(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">Are you of African ancestry?</label>
          <select
            value={Race_African_Ancestry}
            onChange={(e) => setRace_African_Ancestry(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">What is your PSA level?</label>
          {/* <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select> */}
          <input
            type="text"
            value={PSA_Level}
            onChange={(e) => setPSA_Level(e.target.value)}
            placeholder="PSA Level"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Was your DRE (Digital Rectal Exam) result abnormal?
          </label>
          <select
            value={DRE_Result}
            onChange={(e) => setDRE_Result(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Normal/Abnormal
            </option>
            <option value="Normal">Normal</option>
            <option value="Abnormal">Abnormal</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">What is your biopsy result?</label>
          <select
            value={Biopsy_Result}
            onChange={(e) => setBiopsy_Result(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Benign/Malignant
            </option>
            <option value="Benign">Benign</option>
            <option value="Malignant">Malignant</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you experience difficulty urinating?
          </label>
          <select
            value={Difficulty_Urinating}
            onChange={(e) => setDifficulty_Urinating(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you have a weak urine flow?
          </label>
          <select
            value={Weak_Urine_Flow}
            onChange={(e) => setWeak_Urine_Flow(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you notice blood in your urine?
          </label>
          <select
            value={Blood_in_Urine}
            onChange={(e) => setBlood_in_Urine(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">Do you have pelvic pain?</label>
          <select
            value={Pelvic_Pain}
            onChange={(e) => setPelvic_Pain(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">Do you have back pain?</label>
          <select
            value={Back_Pain}
            onChange={(e) => setBack_Pain(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you experience erectile dysfunction?
          </label>
          <select
            value={Erectile_Dysfunction}
            onChange={(e) => setErectile_Dysfunction(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">what is your cancer stage?</label>
          <select
            value={Cancer_Stage}
            onChange={(e) => setCancer_Stage(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Localized,Advanced,Metastatic
            </option>
            <option value="Localized">Localized</option>
            <option value="Advanced">Advanced</option>
            <option value="Metastatic">Metastatic</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            What treatment was recommended?
          </label>
          <select
            value={Treatment_Recommended}
            onChange={(e) => setTreatment_Recommended(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Active
              Surveillance,"Radiation","Immunotherapy","Chemotherapy","Surgery","Hormone
              Therapy"
            </option>
            <option value="Active Surveillance">Active Surveillance</option>
            <option value="Radiation">Radiation</option>
            <option value="Immunotherapy">Immunotherapy</option>
            <option value="Chemotherapy">Chemotherapy</option>
            <option value="Surgery">Surgery</option>
            <option value="Hormone Therapy">Hormone Therapy</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Has a 5-year survival estimate been provided?
          </label>
          <select
            value={Survival_5_Years}
            onChange={(e) => setSurvival_5_Years(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">Do you exercise regularly?</label>
          <select
            value={Exercise_Regularly}
            onChange={(e) => setExercise_Regularly(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you maintain a healthy diet?
          </label>
          <select
            value={Healthy_Diet}
            onChange={(e) => setHealthy_Diet(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">what is your BMI?</label>
          {/* <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select> */}
          <input
            value={BMI}
            onChange={(e) => setBMI(e.target.value)}
            type="text"
            placeholder="BMI"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you have a history of smoking?
          </label>
          <select
            value={Smoking_History}
            onChange={(e) => setSmoking_History(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            What level is your alcohol consumption?
          </label>
          <select
            value={Alcohol_Consumption}
            onChange={(e) => setAlcohol_Consumption(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Low/Moderate/High
            </option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Have you been diagnosed with hypertension?
          </label>
          <select
            value={Hypertension}
            onChange={(e) => setHypertension(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Have you been diagnosed with diabetes?
          </label>
          <select
            value={Diabetes}
            onChange={(e) => setDiabetes(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            what is your cholesterol level?
          </label>
          <select
            value={Cholesterol_Level}
            onChange={(e) => setCholesterol_Level(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Normal/High
            </option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            What is your recommended screening age?
          </label>
          {/* <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select> */}
          <input
            value={Screening_Age}
            onChange={(e) => setScreening_Age(e.target.value)}
            type="text"
            placeholder="Screening age"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Has follow-up been required after screening?
          </label>
          <select
            value={Follow_Up_Required}
            onChange={(e) => setFollow_Up_Required(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            what is your prostate volume?
          </label>
          {/* <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select> */}
          <input
            value={Prostate_Volume}
            onChange={(e) => setProstate_Volume(e.target.value)}
            type="text"
            placeholder="Prostate Volume"
            className="outline-none rounded-lg border border-[#D9D9D9] px-2 py-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you have known genetic risk factors?
          </label>
          <select
            value={Genetic_Risk_Factors}
            onChange={(e) => setGenetic_Risk_Factors(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Do you have a history of previous cancer?
          </label>
          <select
            value={Previous_Cancer_History}
            onChange={(e) => setPrevious_Cancer_History(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#979797]">
            Was the cancer detected early?
          </label>
          <select
            value={Early_Detection}
            onChange={(e) => setEarly_Detection(e.target.value)}
            className="outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2"
          >
            <option value="" disabled>
              Yes/No
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-[#979797]'>Do you have breast Cancer?</label>
             <select name="" id="" className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
            <option value="" disabled>Yes/No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
         </div> */}

        <button className="w-full bg-[#18A0A9] text-white py-3 rounded-lg">
          Submit Now
        </button>

        <div>Result:{prediction}</div>
      </form>
    </div>
  );
};

export default Diagnosis;
