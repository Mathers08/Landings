import React from 'react';

const Feature = ({icon, title}) => {
  return (
    <div className='feature flex flex-col items-center justify-center relative text-center mx-12'>
      <div className='bg-[#081730] rounded-2xl p-4'>
        <img src={require(`../img/${icon}.png`)} alt="icon" className='w-[3rem]'/>
      </div>
      <span className='mt-5'>{title}</span>
      <span className='mt-4 text-[#707070]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim excepturi facere
        necessitatibus rerum sed totam.
      </span>
      <span className='mt-[3rem] text-[#e600ff] underline hover:cursor-pointer'>Learn more</span>

    </div>
  );
};

export default Feature;