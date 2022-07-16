import React, { useState } from 'react';
import MusicPlayer from "./MusicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Search = () => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const onVisibilityChange = (isVisible) => setIsElementVisible(isVisible);
  const bg = {
    true: {left: '-44rem'},
    false: {left: '-50rem'}
  };
  const redImg = {
    true: {left: "18rem"},
    false: {left: "16rem"},
  };
  const musicImg = {
    true: {left: "2rem"},
    false: {left: "6rem"},
  };

  return (
    <div
      className="search relative h-[65rem] px-[5rem] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] bg-[#081730] flex items-center justify-between rounded-b-[5rem]">
      <div className="left flex-1">
        <motion.img
          className="absolute left-[-47rem] top-[22rem] z-[-1]"
          variants={bg}
          animate={`${isElementVisible}`}
          transition={{duration: 1, type: 'ease-out'}}
          src={require("../img/backgraphics.png")}
          alt="img"
        />
        <img className="absolute w-[16rem] top-[26rem]" src={require("../img/d1.png")} alt="img"/>
        <img className="absolute w-[9rem] top-[32.7rem] l-[7rem]" src={require("../img/d2.png")} alt="img"/>
        <motion.img
          className="absolute w-[9rem] top-[33rem] l-[17rem]"
          variants={redImg}
          animate={`${isElementVisible}`}
          transition={{duration: 1, type: 'ease-out'}}
          src={require("../img/d3.png")}
          alt="img"
        />
        <motion.img
          className="absolute w-[17rem] top-[50rem] l-[2rem]"
          variants={musicImg}
          animate={`${isElementVisible}`}
          transition={{duration: 1, type: 'ease-out'}}
          src={require("../img/d4.png")}
          alt="img"
        />
      </div>
      <div className="right flex flex-col items-start justify-start flex-1 h-[100%] pt-[9rem] ml-[1rem]">
        <div className="searchbar flex w-[100%] justify-start">
          <input type="text" placeholder="Enter the keyword or URL"
                 className="flex-[19] outline-none h-[3rem] p-3 rounded-xl bg-[#020917]"/>
          <div
            className="searchIcon flex flex-1 items-center rounded-xl ml-4 p-4 h-[3rem] bg-gradient-to-bl from-[#f3071d] to-[#e600ff]">
            <img src={require("../img/search.png")} alt="search" className="w-[1.5rem]"/>
          </div>
        </div>
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img src={require("../img/Path 318.png")} alt="img" className="w-[5rem]"/>
        </div>
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span><b>Name or Direct URL</b></span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br/> nibh viverra
            eget. Vestibulum ullamcorper <br/> volutpat varius.
          </span>
        </div>
        <VisibilitySensor onChange={onVisibilityChange} minTopValue={300}>
          <MusicPlayer/>
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Search;