import React from 'react'
import { assets } from '../assets/assets'
import '../App.css';    

export default function AboutUs() {
  return (
    <div className='mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-gray-500 text-2xl'>ABOUT <b>US</b></h1>
      </div>
      <div className=' flex mx-[18vh] mt-10'>
            <div>
                <img className='size-' src={assets.about_image} alt="" />
            </div>
            <div className=' w-[90rem] ml-[5vh] space-y-7 pt-9'>
                <div className='space-y-4 text-gray-700'>
                    <p>
                        Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                    </p>
                    <p> 
                        Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>
                </div>
                <div className='space-y-5'>
                    <h2 className='font-bold'>Our Vision</h2>
                <p className='text-gray-700'>
                    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                </p>
                </div>
            </div>
      </div>
      <div className=' flex flex-col mx-[18vh] mt-8'>
        <div>
            <h2 className='text-gray-500 text-2xl'>WHY <b>CHOOSE US</b></h2>
        </div>
        <div className='flex my-[4vh] gap-6'>
            <div className=' py-[10vh] px-[5vh] justify-center items-center border-2 hover:bg-[#5f6FFF] choose-why'>
                <h2 className='font-bold text-gray-700'>EFFICIENCY:</h2>
                <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className=' py-[10vh] px-[5vh] justify-center items-center border-2 hover:bg-[#5f6FFF] choose-why'>
                <h2 className='font-bold text-gray-700'>CONVENIENCE:</h2>
                <p>Access to a network of trusted healthcare professionals in your area.</p>
            </div>
            <div className=' py-[10vh] px-[5vh] justify-center items-center border-2 hover:bg-[#5f6FFF] choose-why'>
                <h2 className='font-bold text-gray-700'>PERSONALIZATION:</h2>
                <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
