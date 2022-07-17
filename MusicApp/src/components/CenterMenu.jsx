import React from 'react';

const CenterMenu = () => {
  const liStyle = 'text-base hover:cursor-pointer';

  return (
    <div className='menu flex'>
      <ul className='flex gap-[3rem] w-[100%] justify-between'>
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Preformer</li>
        <li className={liStyle}>Event Schedule</li>
      </ul>
    </div>
  );
};

export default CenterMenu;