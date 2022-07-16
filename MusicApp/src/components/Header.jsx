import React from 'react';
import CenterMenu from "./CenterMenu";

const Header = () => {
  const btn = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]';

  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>
      <img src={require("../img/MusicLogo.png")} className='w-[42px] h-[42px]' alt="logo"/>
      <CenterMenu/>
      <div className='buttons flex'>
        <button className={btn + ` mr-[35px] hover:bg-[#232a4e]`}>Log in</button>
        <button className={btn + ` bg-[#232a4e]`}>Sign up</button>
      </div>
    </div>
  );
};

export default Header;