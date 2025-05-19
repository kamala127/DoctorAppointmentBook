import React from 'react'
import { assets } from '../assets/assets'
import '../App.css'; 

export default function Conatctus() {
  return (
    <div className='mt-10 mx-[18vh]'>
      <div className='flex justify-center'>
            <h2 className='text-gray-500 text-2xl'>CONTACT <b>US</b></h2>
      </div>
      <div className='mt-6 flex justify-center'>
        <div>   
            <img className='size-[40vh]' src={assets.contact_image} alt="" />
        </div>
        <div className='ml-10 mt-7'>
            <div className='space-y-5'>
                    <h2 className='text-gray-500 text-lg'><b>OUR OFFICE</b></h2>
                <p className='text-gray-500'>00000 Willms Station <br/>
                    Suite 000, Washington, USA</p>
                    <p className='text-gray-500'>Tel: (000) 000-0000 <br/>
                    Email: greatstackdev@gmail.com</p>
        <h2 className='text-gray-500 text-lg'><b>CAREERS AT PRESCRIPTO</b></h2>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            </div>
                

        <div className='mt-5'>
            <button className='border-[1.5px] px-5 py-3 border-slate-800 contact-btn'>Explore Jobs</button>
        </div>
        </div>
      </div>
    </div>
  )
}
