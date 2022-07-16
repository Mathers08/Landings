import React from 'react';
import Feature from "./Feature";

const Experience = () => {
  return (
    <div className='experience flex flex-col items-center justify-start bg-[#020917] h-[60rem] px-[5rem] pt-[18rem] mt-[-10rem] rounded-b-[5rem] relative z-[2]'>
      <img src={require("../img/Path 318.png")} alt=""/>
      <div className='headline flex flex-col items-center text-[2rem] mt-7'>
        <span>An Amazing App Can Change Your Daily Life</span>
        <span><b>Music Experience</b></span>
      </div>
      <div className='feature flex items-center justify-around mt-[6rem] w-[100%]'>
        <Feature icon='Group 2' title='For Live Music'/>
        <Feature icon='music icon' title='For Daily Music'/>
        <Feature icon='Group 4' title='For Artists'/>
      </div>
    </div>
  );
};

export default Experience;