import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function FooterBanner() {
const navigate = useNavigate();


    const gotocreateaccount = ()=>{
      navigate('/CreateAccount');
    }


  return (
    <div className='bg-[#5f6FFF] flex flex-row justify-between  rounded-lg mt-[10vh] ml-[24vh] w-[127vh] h-[40vh] mb-5'>
        <div className=' flex flex-col justify-center text-left ml-[9vh] w-[73vh] gap-6'>
            <h2 className='text-white font-bold text-5xl'>Book Appointment <br/>
                With 100+ Trusted Doctors</h2>
                <div>
            <button className='bg-slate-100  py-2.5 px-8 rounded-full text-zinc-600' onClick={gotocreateaccount}>Create account</button>
                </div>
        </div>
        <div className='  flex mt-[-3vh] mr-14'>
            <img src={assets.appointment_img} alt='' />
        </div>
    </div>
  )
}
