import React from 'react'
import { assets } from '../assets/assets'

export default function Banner() {
  return (
    <div className='bg-[#5f6FFF] flex flex-row justify-center my-5 mx-[18vh] pt-[10vh] rounded-lg'>
        
    <div className='ml-[5rem] space-y-5  mr-7 mt-10'>
        <h1 className='text-white font-bold text-5xl'>
            Book Appointment
            <br/>
            With Trusted Doctors
        </h1>
        <div className='flex text-white gap-3' >
            <img src={assets.group_profiles} alt='' />
            <p className='text-sm'>Simply browse through our extensive list of trusted doctors,
schedule your appointment hassle-free.</p>
        </div>
        <div>
            <button className='bg-slate-100 px-8 py-2.5 rounded-full text-zinc-600 duration-300 ease-in-out hover:scale-110' >Book appointment &rarr;</button>
        </div>
    </div>
    <div className='mr-20'>
        <img src={assets.header_img} alt='' />
    </div>
    </div>
  )
}
