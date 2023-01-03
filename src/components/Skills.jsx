import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div className=' w-full h-screen text-gray-300 '>

      <div className='max-w-screen-lg flex flex-col h-full w-full mx-auto p-4'>

        <div>
        <p className=" text-gray-300 inline border-b-4 border-pink-600 text-4xl">Skills </p>
        <p className='p-4'>// These are the technologies I've worked with</p>
        </div>


        <div className=' grid sm:grid-cols-4 grid-cols-2 gap-4 text-center w-full py-8  '>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='mx-auto w-20' src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='mx-auto w-20' src={CSS} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='mx-auto w-20' src={JavaScript} alt="" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='mx-auto w-20' src={ReactImg} alt="" />
            <p className="my-4">REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='mx-auto w-20' src={Node} alt="" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='mx-auto w-20' src={Mongo} alt="" />
            <p className="my-4">MONGO</p>
          </div>
          

        </div>

      </div>
      
    </div>
  )
}

export default Skills
