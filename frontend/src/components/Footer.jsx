import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { CanContext } from '../context/CanContext'

const Footer = () => {

  const {navigate} = useContext(CanContext)

  return (
    <div className='w-full lg:px-40 md:px-20 px-5 py-20 bg-[#18A0A9] flex lg:flex-row gap-10 flex-col justify-between'>
      

      <div className=' flex flex-row gap-8 lg:flex-col'>
              <div className="flex  items-center gap-3">
                <img src={assets.icon} alt="" />
                <p className="font-bold text-white text-[14px]">Medico</p>
              </div>

              <div>
                <button onClick={() => navigate('/diagnose')} className='border border-white px-6 py-3 rounded-lg text-white'>Diagnose Yourself</button>
                {/* <button className='border border-white px-6 py-3 rounded-lg'></button> */}
              </div>
      </div>

      <div className='space-y-5'>
        <p className='text-[18px] font-medium uppercase text-white'>Services</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium text-[18px] text-white'>Pathology</li>
          <li className='font-medium text-[18px] text-white'>Ambulance</li>
          <li className='font-medium text-[18px] text-white'>Radiology</li>
          <li className='font-medium text-[18px] text-white'>Pharmacy</li>
        </div>
      </div>

       <div className='space-y-5'>
        <p className='text-[18px] font-medium uppercase text-white'>health checkup</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium text-[18px] text-white'>Women Health</li>
          <li className='font-medium text-[18px] text-white'>Cancer Screening</li>
          <li className='font-medium text-[18px] text-white'>Cardiac Health</li>
          <li className='font-medium text-[18px] text-white'>MRI Checkup</li>
        </div>
      </div>

       <div className='space-y-5'>
        <p className='text-[18px] font-medium uppercase text-white'>Quick links</p>

        <div className='space-y-2 list-none'>
          <li className='font-medium text-[18px] text-white'>Home</li>
          <li className='font-medium text-[18px] text-white'>Services</li>
          <li className='font-medium text-[18px] text-white'>Healthtips</li>
          {/* <li className='font-medium text-[18px] text-white'>Pharmacy</li> */}
        </div>
      </div>


    </div>
  )
}

export default Footer
