import { useState } from "react";
import DishesCard from "./assets/dishesCard";

const DishesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dishes = [
    {
      price: '24.00',
      rating: '4.9',
      title: 'Fattoush Salad',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/fattoushsalada.png`,
    },
    {
      price: '26.00',
      rating: '4.6',
      title: 'Vegetable salad',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/vegsalad.png`,
    },
    {
      price: '23.00',
      rating: '4.5',
      title: 'Egg vegi Salad',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/eggsalad.svg`,
    },
    {
      price: '24.00',
      rating: '4.9',
      title: 'teste',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/fattoushsalada.png`,
    },
    {
      price: '26.00',
      rating: '4.6',
      title: 'teste2',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/vegsalad.png`,
    },
    {
      price: '23.00',
      rating: '4.5',
      title: 'teste3',
      subtitle: 'Description of the item',
      imgUrl: `${process.env.PUBLIC_URL}/images/eggsalad.svg`,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dishes.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dishes.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleDishes = [
    ...dishes.slice(currentIndex, currentIndex + 3),
    ...dishes.slice(0, Math.max(0, currentIndex + 3 - dishes.length)),
  ];

  return (
  <div className="flex justify-center">
    <div className="mt-36 mainDishesContainer">
      <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText">
        SPECIAL DISHES
      </p>
      <div className="flex items-end justify-between">
        <h1 className="text-left text-[60px] font-bold interFont">
          Standout Dishes<br /> From Our Menu
        </h1>
        <div className="flex gap-[50px] mr-9">
          <button onClick={handlePrevious}>
            <img src={`${process.env.PUBLIC_URL}/images/dishesButton1.png`} alt="previous-button" />
          </button>
          <button onClick={handleNext}>
            <img src={`${process.env.PUBLIC_URL}/images/dishesButton2.png`} alt="forward-button" />
          </button>
        </div>
      </div>
        <div className="justify-start mt-[63px] flex gap-[5.7rem] below-xl:flex below-xl:flex-col">
        {visibleDishes.map((dish, index) => (
          <DishesCard
            key={index}
            price={dish.price}
            rating={dish.rating}
            title={dish.title}
            subtitle={dish.subtitle}
            imgUrl={dish.imgUrl}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default DishesSection;
