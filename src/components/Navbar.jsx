import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const HandleNav = () => {
    setNav(!Nav)
  }
  return (
    
    <div className=' fixed bg-[#0a192f] w-full h-[80px] flex justify-between items-center px-14'>
      <div>
        <h1 className=' text-pink-500 text-4xl font-bold'> RAFFAT</h1>
      </div>

      <ul className=' text-gray-300 md:flex hidden space-x-8 cursor-pointer'>
        <li className=' hover:text-pink-500 hover:scale-95'>HOME</li>
        <li className=' hover:text-pink-500 hover:scale-95'>About</li>
        <li className=' hover:text-pink-500 hover:scale-95'>Skills</li>
        <li className=' hover:text-pink-500 hover:scale-95'>Work</li>
        <li className=' hover:text-pink-500 hover:scale-95'>contact</li>
      </ul>

      <div onClick={HandleNav} className=' text-pink-500 md:hidden flex z-20 cursor-pointer'>
        { !Nav ? <FaBars  size={30}/>:<FaTimes/>}
        
      </div >


      <ul className={!Nav? 'hidden' : ' absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-300 space-y-10 font-bold text-3xl duration-300 '}>
        <li>HOME</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>contact</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul className=' space-y-1'>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600 text-gray-200'>
            <a href="" className=' flex  justify-between items-center w-full '> LINKED IN <FaLinkedin size={40}/> </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
            <a href="" className=' flex  justify-between items-center w-full '> GitHup <FaGithub size={40}/> </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-yellow-300 '>
            <a href="" className=' flex  justify-between items-center w-full '> Emial <HiOutlineMail size={40}/> </a>
            </li>
           
        </ul>
      </div>

    </div>

    

  )
}

export default Navbar
