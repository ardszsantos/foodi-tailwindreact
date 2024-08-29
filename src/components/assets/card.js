import React from 'react';

const FoodCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="w-[326px] h-[326px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 mb-14">
      <div className="w-[153px] h-[153px]bg-green-100 rounded-full flex items-center justify-center mb-3">
        <img src={imgUrl} alt={title} className="rounded-full" />
      </div>
      <h3 className="text-[36px] text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-[22px] mt-1">{subtitle}</p>
    </div>
  );
};

export default FoodCard;
