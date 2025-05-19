import React from 'react'
import TopDoctors from './TopDoctors'

export default function AllDoctors() {




  return (
    <div>
        <h4 className='mx-[18vh] mt-3'>Browse through the doctors specialist.</h4>
      <div className='flex'>
        
        <div className=' mr-[-20vh] ml-[18vh] mt-6 flex flex-col gap-4'>
            {
                [
                   {bname:'General physician'}, 
                   {bname:'Gynecologist'}, 
                   {bname:'Dermatologist'}, 
                   {bname:'Pediatricians'}, 
                   {bname:'Neurologist'}, 
                   {bname:'Gastroenterologist'} 
                ].map((btn)=>(
                        <div key={btn.bname} className=' border pr-14 pl-3 rounded-md '>
                                <button className=' text-sm py-1.5  items-start' >{btn.bname}</button>
                            </div>
                ))}
            

            


        </div>
            <div className='mt-6 '>
                <TopDoctors showHeader={false}/>    
            </div>
            
      </div>
    </div>
  )
}
