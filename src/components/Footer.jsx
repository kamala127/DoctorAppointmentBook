import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='  pt-[15vh] flex justify-between mx-[24vh]'>
      <div className=' w-[55vh] space-y-3' >
        <div>
            <img  src={assets.logo} alt="" />
        </div>
        <div>
            <p className='text-slate-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className=' px-[7rem] flex flex-col justify-center gap-4'>
        <h2 className='font-bold'>COMPANY</h2>
        <div className='list-none flex flex-col text-left text-slate-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </div>
      </div>
      <div className=' mr-[1rem] flex flex-col justify-center h-[13vh]'>
        <h2 className='font-bold'>GET IN TOUCH</h2>
        <div className='list-none flex flex-col  text-slate-600 text-left mt-6'>
            <li>+91 9937223743</li>
            <li>kamalakantarout128@gmail.com</li>
        </div>
      </div>
    </div>
  )
}
