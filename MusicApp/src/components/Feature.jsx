import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Feature = ({icon, title}) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const onVisibilityChange = (isVisible) => setIsElementVisible(isVisible);
  const variant = {
    true: {transform: 'scale(1)'},
    false: {transform: 'scale(0.5)'}
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} minTopValue={300}>
      <div className="feature flex flex-col items-center justify-center relative text-center mx-12">
        <motion.div
          className="icon bg-[#081730] rounded-2xl p-4"
          variants={variant}
          animate={`${isElementVisible}`}
          transition={{duration: 1, type: 'ease-out'}}
        >
          <img src={require(`../img/${icon}.png`)} alt="icon" className="w-[3rem]"/>
        </motion.div>
        <span className="mt-5">{title}</span>
        <span className="mt-4 text-[#707070]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim excepturi facere
        necessitatibus rerum sed totam.
      </span>
        <span className="mt-[3rem] text-[#e600ff] underline hover:cursor-pointer">Learn more</span>
      </div>
    </VisibilitySensor>
  );
};

export default Feature;