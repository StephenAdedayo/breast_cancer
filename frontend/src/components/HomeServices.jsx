import React, {useState, useContext } from "react";
import { assets } from "../assets/assets";
import { CanContext } from "../context/CanContext";


const HomeServices = () => {

  const services = [
  {
    id: 1,
    title: "Awareness & Education",
    img: assets.drop,
    details:
      "We believe knowledge is the first step toward prevention and better health. Our awareness and education service is designed to give you clear, accessible, and scientifically backed information about both breast and prostate cancer. This includes explaining common risk factors such as family history, lifestyle habits, diet, and age, as well as highlighting the importance of regular health checkups and early detection. We also break down complex medical terms into simple language so that everyone, regardless of background, can understand what signs to look out for, what preventive actions to take, and how lifestyle changes can reduce risk. By empowering you with accurate and trustworthy knowledge, we hope to make cancer awareness part of everyday life, not just a hospital visit."
  },
  {
    id: 2,
    title: "Risk Assessment Questionnaire",
    img: assets.round,
    details:
      "The risk assessment questionnaire is an interactive tool created to help you reflect on your health and identify potential red flags before they become serious. It consists of carefully structured questions about your personal health history, daily habits, family medical background, and any symptoms you might have noticed. For breast cancer, it may ask about changes in the breast, family history, or lifestyle choices such as alcohol consumption. For prostate cancer, it could involve questions about urinary patterns, prostate health, and overall wellbeing. This self-assessment does not diagnose, but it creates a detailed health profile that helps both you and our system understand your potential level of risk. The more honest and accurate your answers are, the more useful and personalized the outcome will be. Think of it as a health checkup you can do anywhere, anytime, without needing a hospital visit."
  },
  {
    id: 3,
    title: "ML-Based Prediction",
    img: assets.drop,
    details:
      "After completing the questionnaire, your responses are processed by our advanced machine learning (ML) model. This is where technology and healthcare meet to provide a smarter, faster, and more accessible prediction tool. The model analyzes patterns in your data and compares them against thousands of data points used in training, identifying subtle signals that might not be obvious in traditional methods. Based on these patterns, it predicts whether your result is more likely to be Negative or Positive for breast or prostate cancer risk. While this does not replace professional medical diagnosis, it gives you an early, research-backed indication of your health status. Our ML system improves over time as it learns from more data, ensuring accuracy and reliability. This empowers you to take action earlier, seek medical attention if necessary, and avoid unnecessary delays in care."
  },
  {
    id: 4,
    title: "Care & Support Resources",
    img: assets.love,
    details:
      "We understand that receiving a health prediction—whether positive or negative—can bring a lot of emotions and questions. That’s why our platform also provides access to care and support resources tailored for your journey. For individuals with a low risk, we share tips on maintaining a healthy lifestyle, including exercise, nutrition, and stress management. For those at higher risk or with a positive prediction, we provide guidance on the next recommended steps, such as consulting a healthcare provider, considering further medical tests, or reaching out to specialists. Beyond the medical aspect, we also include mental health support, coping strategies, and connections to patient communities. We want you to feel supported, informed, and empowered—not isolated—no matter what your results indicate. The goal is not just prediction, but also helping you build confidence in managing your health with the right tools and resources."
  }
];


const {navigate} = useContext(CanContext)



  return (
    <>
    <div className="my-28">
      <div className="flex flex-col gap-5  lg:flex-row justify-between lg:items-center mb-10">
        <div className="space-y-3">
          <p className="text-[#09A4AD] font-bold text-[16px]">
            SERVICES & TREATMENTS
          </p>
          <p className="xl:text-[46px] text-[25px] xl:w-[538px] w-full font-bold">
  Comprehensive Care for Breast & Prostate Cancer
          </p>
        </div>

        <div className="">
          <button onClick={() => navigate("/services")} className="xl:px-6 px-4 py-2  bg-[#00A0AA] text-white  items-end rounded-md">
            See All Services
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white relative w-full rounded-lg p-8 flex  gap-5"
          >
            <img className="size-[25px]" src={service.img} alt="" />
            <div className="space-y-5">
              <p className="font-bold text-[25px]">{service.title}</p>
              <p className="text-[14px] font-medium">{service.details.split(" ").slice(0, 20).join(" ")}{"..."}</p>
            </div>

           
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomeServices;
