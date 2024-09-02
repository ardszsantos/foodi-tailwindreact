import React from 'react';

const ServicesCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="w-[277px] h-[297px] bg-white rounded-[30px] shadow-md flex flex-col items-center justify-center p-6 m-9">
      <div className="w-[64px] h-[64px] bg-green-100  flex items-center justify-center mb-3">
        <img src={imgUrl} alt={title}/>
      </div>
      <h3 className="text-[24px] interFont text-buttonGreen align-text-top font-bold">{title}</h3>
      <p className="mt-[17px] text-center font-semibold interFont text-cardSubText text-[20px]">{subtitle}</p>
    </div>
  );
};

export default ServicesCard;
