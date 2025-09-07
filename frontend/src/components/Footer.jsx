import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { CanContext } from '../context/CanContext'

const Footer = () => {

  const {navigate} = useContext(CanContext)

  return (
    <div className='w-full lg:px-40 md:px-20 px-5 py-20 bg-[#18A0A9] flex xl:flex-row gap-10 flex-col justify-between'>
      

      <div className=' flex flex-[35%] flex-row gap-8 lg:flex-col'>
              <div className="flex  items-center gap-3">
                <img src={assets.icon} alt="" />
                <p className="font-bold text-white text-[14px]">Medico</p>
              </div>

              <div>
                <button onClick={() => navigate('/diagnose')} className='border border-white px-6 py-3 rounded-lg text-white'>Diagnose Yourself</button>
                {/* <button className='border border-white px-6 py-3 rounded-lg'></button> */}
              </div>
      </div>

<div className='flex-[65%] flex justify-between gap-14 flex-col sm:flex-row'>

      <div className='space-y-5 '>
        <p className='lg:text-[18px] text-[15px] font-medium uppercase text-white'>Services</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Awareness & Education</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Risk Assessment</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>ML Prediction Tool</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Care & Support Resources</li>
        </div>
      </div>

       <div className='space-y-5 '>
        <p className='lg:text-[18px] text-[15px] font-medium uppercase text-white'>Health Checkup</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Breast Cancer Prediction</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Prostate Cancer Prediction</li>
          {/* <li className='font-medium text-[18px] text-white'>Cardiac Health</li> */}
          {/* <li className='font-medium text-[18px] text-white'>MRI Checkup</li> */}
        </div>
      </div>

       <div className='space-y-5'>
        <p className='lg:text-[18px] text-[15px] font-medium uppercase text-white'>Quick links</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Home</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Services</li>
          <li className='font-medium lg:text-[18px] text-[15px] text-white'>Healthtips</li>
          {/* <li className='font-medium text-[18px] text-white'>Pharmacy</li> */}
        </div>
      </div>
</div>


    </div>
  )
}

export default Footer
