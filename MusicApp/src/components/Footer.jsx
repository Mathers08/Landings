import React from 'react';
import CenterMenu from "./CenterMenu";
import { Facebook, LinkedIn, Twitter, YouTube } from "@material-ui/icons";

const Footer = () => {
  const socialStyle = "rounded-full border-2 border-whit p-2"

  return (
    <footer className="flex flex-col items-center bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      <div className="flex justify-center mt-14 gap-[5rem]">
        <div className={socialStyle}>
          <Facebook />
        </div>
        <div className={socialStyle}>
          <Twitter />
        </div>
        <div className={socialStyle}>
          <YouTube/>
        </div>
        <div className={socialStyle}>
          <LinkedIn />
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </footer>
  );
};

export default Footer;