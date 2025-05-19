import React, { useEffect, useState } from 'react';
import { doctors } from '../assets/assets';
import Appointment from './Appointment';

export default function RelatedDoctor() {
    const [relatedDoc, setrelatedDoc] = useState([]);
    useEffect(() => {
  const handleUpdate = () => {
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      const foundDoc = doctors.find((doc) => doc._id === storedId);
      if (foundDoc) {
        const category = foundDoc.speciality;
        console.log("Selected category:", category);

        const related = doctors.filter((doc) => doc.speciality === category && doc._id !== foundDoc._id);
        setrelatedDoc(related);
        console.log(related);
      }
    }
  };

  // Listen for manual trigger
  window.addEventListener("storageUpdated", handleUpdate);

  // Also run once on mount
  handleUpdate();

  return () => {
    window.removeEventListener("storageUpdated", handleUpdate);
  };
}, []);


const senDoctordata = (doc)=>{
        localStorage.setItem('Id', doc._id);
        window.dispatchEvent(new Event("storageUpdated")); // Custom trigger
    }
  return (
    <div className='mt-[10vh]'>
      <div className='  flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl pb-5'>Related Doctors</h1>
        <p className='text-gray-700'>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className='flex flex-wrap gap-4 mt-7 ml-[18vh]'>
                      {
                          relatedDoc.map((doc)=>(
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
