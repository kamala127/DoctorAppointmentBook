import React, { useEffect, useState } from 'react';
import { doctors } from '../assets/assets';
import { assets } from '../assets/assets';

export default function Appointment() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
  const handleStorageUpdate = () => {
    const storedId = localStorage.getItem('Id');
    const foundDoc = doctors.find((doc) => doc._id === storedId);
    if (foundDoc) {
      setSelectedDoc(foundDoc);
    }
  };

  window.addEventListener('storageUpdated', handleStorageUpdate);

  // Also call it on mount
  handleStorageUpdate();

  return () => {
    window.removeEventListener('storageUpdated', handleStorageUpdate);
  };
}, []);


  return (
    <div>
  {selectedDoc ? (
    <div className=' flex mx-[18vh] my-5'>
      <div className='bg-[#5f6FFF] rounded-lg'>
        <img className='size-[35vh] object-cover ' src={selectedDoc.image} alt='' />
      </div>
      <div className=' ml-6 w-[110vh] rounded-lg border-[1.5px] border-zinc-400 flex flex-col space-y-5 pl-8 pt-7'>
        <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
                    <h1 className='text-3xl font-bold text-gray-700'>{selectedDoc.name}</h1>
            <img className='size-5' src={assets.verified_icon} alt="" />
            </div>
            
            <div className='flex gap-2 mt-2'>
                <div className='text-gray-600'>
                <h2>{selectedDoc.degree} - {selectedDoc.speciality}</h2>
                </div>
                <div>
                    <button className='border-2 rounded-full px-2 py-[1px] text-[0.7rem] text-gray-700 '>{selectedDoc.experience}</button>
                </div>
            </div>
        </div>
        <div>
            <h2 className='font-semibold text-sm'>About</h2>
            <div className='text-gray-600 text-sm'>
                {selectedDoc.about}
            </div>
        </div>
        <div>
            <h3 className='text-gray-600'>Appointment fee: ${selectedDoc.fees}</h3>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center mt-5">No doctor selected</p>
  )}
</div>

  );
}
