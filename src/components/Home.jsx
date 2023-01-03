import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name='home' className=' w-full h-screen'>
      <div className=' max-w-screen-lg flex flex-col justify-center px-8 mx-auto h-full'>
        <p className=' text-pink-600   '>Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">YOUSSEF HAZO</h1>
        <h3 className='font-bold text-4xl text-gray-300  '>I'm a Full Stack Developer.</h3>
        <p className='text-gray-300 py-4 max-w-[700px]'>I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.</p>
        <div >
          <button className='text-white border-2  px-6 py-3 my-2 group rounded-lg hover:bg-pink-600 flex items-center hover:border-pink-600 duration-500 '>
            View Work
            <span className=' group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className=' ml-3'/> </span>
            </button>
          
        </div>
      </div>
      
    </div>
  )
}

export default Home
