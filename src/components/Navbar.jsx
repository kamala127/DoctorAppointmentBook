import React from 'react'

import {assets} from '../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

  const location = useLocation();
    const navigate = useNavigate();


    const gotocreateaccount = ()=>{
      navigate('/CreateAccount');
    }

  return (
    <div className=' flex justify-between py-4 mx-5 lg:mx-[18vh] border-b-2'>
        <div className='lg:w-[20vh] sm:flex w-[25vh] ml-1'>
            <img className='cursor-pointer' onClick={()=>{
              navigate('/');
            }} src={assets.logo} alt='' />
        </div>
        <div className='bg-white items-center list-none gap-x-8  font-semibold sm:flex hidden'>
            <NavLink to={'/'} className={location.pathname === "/" ? 'border-blue-500 border-b-2' : ''}>
               <li>HOME</li>
            </NavLink>
            <NavLink to={'/Doctors'}  className={location.pathname === "/Doctors" ? 'border-blue-500 border-b-2' : ''} >
                <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink to={'/About'}  className={location.pathname === "/About" ? 'border-blue-500 border-b-2' : ''}>
                <li>ABOUT</li>
            </NavLink>
            <NavLink to={'/Contact'} className={location.pathname === "/Contact" ? 'border-blue-500 border-b-2' : ''}>
                <li>CONTACT</li>
            </NavLink>
            
        </div>
        <div className='hidden sm:flex items-center lg:px-5 py-2'>
  <button className='bg-[#5f6FFF] py-2 px-5 rounded-3xl text-white font-semibold' onClick={gotocreateaccount}>
    Create Account
  </button>
</div>
    <div className="lg:hidden sm:flex items-center mr-4 mt-2">
  <img src={assets.menu_icon} alt='' className='h-6 w-6' />
  
</div>

    </div>
    
  )
}
