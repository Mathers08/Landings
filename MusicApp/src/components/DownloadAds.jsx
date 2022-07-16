import React from 'react';

const DownloadAds = () => {
  const img = 'border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]';

  return (
    <div className='download'>
      <div className='download_images flex gap-[2rem]'>
        <img src={require("../img/App Store.png")} alt="appstore" className={img}/>
        <img src={require("../img/Google Play.png")} alt="market" className={img}/>
      </div>
    </div>
  );
};

export default DownloadAds;