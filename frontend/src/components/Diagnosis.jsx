import React from 'react'

const Diagnosis = () => {
  return (
    <div className='w-full my-28 flex lg:flex-row flex-col gap-20'>
      
        <div className='flex-[50%] space-y-4'>
            <p className='uppercase text-[12px] font-bold text-[#09A4AD]'>Preemptive Breast Cancer Diagnosis</p>
            <p className='font-bold xl:text-[40px] text-[30px]'>Get a free preemptive diagnosis by completing the form.</p>
            <p className='xl:text-[20px] text-[17px] font-medium'>It's quick, secure, and could help identify early risk factors before symptoms appear.
This tool is not a medical test but an early screening aid.</p>
        </div>

        <form className='flex-[50%] space-y-4 rounded-lg bg-white p-5'>
           
           <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-[#979797]'>Age</label>
         <input type="text" placeholder='Age' className='outline-none rounded-lg border border-[#D9D9D9] px-2 py-2'/>
           
           </div>
           
            <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-[#979797]'>Gender</label>
             <select name="" id="" className='outline-none border text-[#979797] rounded-lg border-[#D9D9D9] px-2 py-2'>
            <option value="" disabled>Male/Female</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
         </div>

         <div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have a family history of prostate cancer?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Are you of African ancestry?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Is your PSA level high?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Was your DRE (Digital Rectal Exam) result abnormal?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Was your biopsy result positive?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you experience difficulty urinating?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have a weak urine flow?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you notice blood in your urine?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have pelvic pain?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have back pain?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you experience erectile dysfunction?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Are you aware of your cancer stage?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Has treatment been recommended?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Has a 5-year survival estimate been provided?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you exercise regularly?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you maintain a healthy diet?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Is your BMI within a healthy range?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have a history of smoking?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you consume alcohol?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Have you been diagnosed with hypertension?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Have you been diagnosed with diabetes?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have high cholesterol levels?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Did you start screening at the recommended age?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Has follow-up been required after screening?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Is your prostate volume considered large?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have known genetic risk factors?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Do you have a history of previous cancer?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>

<div className='flex flex-col gap-2'>
  <label className='text-[#979797]'>Was the cancer detected early?</label>
  <select className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
    <option value="" disabled>Yes/No</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


         <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-[#979797]'>Do you have breast Cancer?</label>
             <select name="" id="" className='outline-none text-[#979797] border rounded-lg border-[#D9D9D9] px-2 py-2'>
            <option value="" disabled>Yes/No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
         </div>

         <button className='w-full bg-[#18A0A9] text-white py-3 rounded-lg'>Submit Now</button>
        </form>

    </div>
  )
}

export default Diagnosis
