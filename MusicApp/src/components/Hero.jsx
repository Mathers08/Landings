import React, { useState } from 'react';
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Hero = () => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const onVisibilityChange = (isVisible) => setIsElementVisible(isVisible);
  const bg = {
    true: {left: '7rem'},
    false: {left: '19rem'}
  }
  const musicPlayer = {
    true: {left: "295px",},
    false: {left: "235px",},
  };
  const rect = {
    true: {left: "11rem",},
    false: {left: "13rem",},
  }
  const heart = {
    true: {left: "9rem",},
    false: {left: "12.5rem",},
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} minTopValue={300}>
      <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]'>
        <div className='headings flex flex-col items-start justify-center h-[100%] text-[3rem]'>
          <span>Experience The</span>
          <span><b>Best Quality Music</b></span>
          <span className='text-[15px] text-[#525d6e]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quo.
          <br/>
          Assumenda eveniet incidunt laborum odio.
        </span>
          <div>
            <span className='text-[13px]'>Download now on IOS and Android</span>
            <DownloadAds/>
          </div>
        </div>
        <div className='images relative w-[50%]'>
          <motion.img
            src={require("../img/backgraphics.png")}
            alt=""
            variants={bg}
            animate={`${isElementVisible}`}
            transition={{duration: 1, type: 'ease-out'}}
            className='absolute top-[-8rem] left-[19rem]'
          />
          <img src={require("../img/p 1.png")} alt="" className='absolute top-[-15rem] left-[13rem] h-[34rem]'/>
          <motion.img
            src={require("../img/p 2.png")}
            alt=""
            variants={musicPlayer}
            animate={`${isElementVisible}`}
            transition={{duration: 1, type: 'ease-out'}}
            className='absolute top-[94px] left-[235px] w-[175px]'
          />
          <motion.img
            src={require("../img/p 3.png")}
            alt=""
            variants={rect}
            animate={`${isElementVisible}`}
            transition={{duration: 1, type: 'ease-out'}}
            className='absolute top-[12rem] left-[13rem] w-[5rem]'
          />
          <motion.img
            src={require("../img/p 4.png")}
            alt=""
            variants={heart}
            animate={`${isElementVisible}`}
            transition={{duration: 1, type: 'ease-out'}}
            className='absolute top-[12rem] left-[12.5rem] w-[5rem]'
          />
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Hero;