import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {

    const navigate = useNavigate();

    const clickforloginpage = ()=>{
        navigate('/LoginPage');
    }
  
  return (
    <div className=' mx-[18vh] mt-5 py-[10vh] flex justify-center items-center'>
      <div className=' border-[1px] px-8 pb-[4vh] w-[25rem] rounded-xl shadow-lg'>
        <div className='space-y-3 mt-7'>
            <h2 className='text-gray-500 text-2xl font-bold'>Create Account</h2>
            <p className='text-sm text-gray-600'>Please sign up to book appointment</p>
        </div>
        <div className='mt-4 space-y-5'>
            <div>
                <p className='text-sm text-gray-600'>Full Name</p>
            <input className='border-[2px] w-[20rem] pl-2 py-[3px] rounded-[5px] outline-none' type="text" />
            </div>
            <div>
                <p className='text-sm text-gray-600'>Email</p>
            <input className='border-[2px] w-[20rem] pl-2 py-[3px] rounded-[5px] outline-none ' type="text" />
            </div>
            <div>
                <p className='text-sm text-gray-600'>Password</p>
            <input className='border-[2px] w-[20rem] pl-2 py-[3px] rounded-[5px] outline-none ' type="password" />
            </div>
        
        </div>
        <div className='mt-5'>
            <button className='bg-[#5f6FFF] text-white w-[20rem] rounded-[5px] py-2'>Create account</button>
        </div>
        <div className='mt-6 flex items-center gap-3'>
            <p className='text-sm text-gray-600'>Already have an account?</p>
            <button className='bg-gray-700 shadow-lg shadow-gray-500/50 text-white px-4 py-1 rounded-full' onClick={clickforloginpage}>Login</button>
        </div>
      </div>
    </div>
  )
}
