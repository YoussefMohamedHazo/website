import React from "react";

const About = () => {
  return (
    <div className=" w-full h-screen text-gray-400">
      <div className=" w-full  h-full flex flex-col justify-center items-center ">
        <div className="max-w-screen-lg w-full grid grid-cols-2 gap-8 ">
          <div className=" sm:text-right pb-8 pl-4 ">
            <p className=" text-gray-300 inline border-b-4 border-pink-600 text-4xl">
            
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className=" max-w-screen-lg w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="text-4xl font-bold sm:text-right ">
            <p>
              Hi. I'm Youssef HaZo, nice to meet you. Please take a look around.
            </p>
          </div>

          <div className=" ">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
