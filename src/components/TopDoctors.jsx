import React, { useState } from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


export default function TopDoctors({ showHeader = true}) {
    
    const [clcikeddoc,setClcikeddoc] = useState([]);
    
    const navigate = useNavigate();
    
    const senDoctordata = (doc)=>{
        setClcikeddoc([doc]);
        localStorage.setItem('Id', String(doc._id)); // convert to string
        navigate('/BookAppointment');

    }

    console.log(clcikeddoc[0]);
  return (
    <div className='  flex flex-col justify-center items-center mx-[22vh] gap-10 '>
        {showHeader && (
        <div className=' flex flex-col justify-center items-center gap-4'>
            <h2 className='font-sans text-3xl font-semibold'>Top Doctors to Book</h2>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        )}
        <div className='flex flex-wrap  justify-center gap-4'>
                {
                    doctors.map((doc)=>(
                            <div key={doc._id} className='w-[13rem] flex flex-col justify-center items-center bg-white rounded-xl border-x-[1.5px] border-y-[1.5px] border-[#bec8e5] overflow-hidden  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'
                             onClick={()=>senDoctordata(doc)}>
                <div className='bg-[#e3e9fa]'>
                    <img src={doc.image} alt='' />
                </div>
                <div className='py-5 text-left'>
                    <div className='flex text-[#22c55e] font-sans items-center '>
                        <div className='inline-block w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                        <p>Available</p>
                    </div>
                    <h3 className='font-semibold'>{doc.name}</h3>
                    <p className='opacity-70'>{doc.speciality}</p>
                </div>
            </div>
                    ))
                }
        </div>
    </div>
  )
}
