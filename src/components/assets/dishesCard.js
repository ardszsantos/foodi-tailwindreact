import React from 'react';
import StarIcon from './starSVG';

const DishesCard = ({ imgUrl, title, subtitle, price, rating }) => {
  return (
    <div style={{ height: '523px', width: '446px' }} className="flex flex-col bg-white rounded-[40px] shadow-md">
      <div className="relative mt-[37px] mb-[25px] flex justify-center bg-green-100 rounded-full">
        <div className='absolute top-[-36px] right-[-1px]'>
          <img src={`${process.env.PUBLIC_URL}/greenstar.svg`} alt="Favorite" />
        </div>
        <img src={imgUrl} alt={title} className="rounded-full" />
      </div>
      <div className='text-left'>
        <h1 className="ml-12 mb-[19px] interFont text-3xl text-lg font-semibold">{title}</h1>
        <p className="ml-12 mb-[28px] interFont text-gray-500 text-[22px] text-muted mt-1">{subtitle}</p>
      </div>
      <div className='flex justify-between'>
        <p className="font-bold ml-[46px] interFont text-gray-500 text-[22px] mt-1">
          <span className='text-sectionDscText'>$</span>
          {price}
        </p>
        <p className="flex items-center gap-[15px] font-semibold text-muted mr-[44px] interFont text-gray-500 text-[22px] mt-1"><StarIcon/> {rating}</p>
      </div>
    </div>
  );
};

export default DishesCard;
