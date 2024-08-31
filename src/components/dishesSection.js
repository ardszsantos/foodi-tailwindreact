import DishesCard from "./assets/dishesCard";

const DishesSection = () => {
  return ( 
    <div className="min-h-screen mt-52 ml-60 mainDishesContainer">
      <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText">
        SPECIAL DISHES
      </p>
      <div className="flex items-end justify-between">
        <h1 className="text-left text-[60px] font-bold interFont">
          Standout Dishes<br/> From Our Menu
        </h1>
        <div className="flex gap-[50px] mr-40">
          <button><img src={`${process.env.PUBLIC_URL}/images/dishesButton1.png`} alt="previous-button"></img></button>
          <button><img src={`${process.env.PUBLIC_URL}/images/dishesButton2.png`} alt="forward-button"></img></button>
        </div>
      </div>
      <div className="justify-start mt-[63px] flex gap-[5.7rem]">
        <DishesCard 
          price={'24.00'}
          rating={'4.9'}
          title={'Fattoush Salad'} 
          subtitle={'Description of the item'}
          imgUrl={`${process.env.PUBLIC_URL}/images/fattoushsalada.png`}
        />
        <DishesCard
          price={'26.00'}
          rating={'4.6'}
          title={'Vegetable salad'}
          subtitle={'Description of the item'}
          imgUrl={`${process.env.PUBLIC_URL}/images/vegsalad.png`} 
          />
        <DishesCard
          price={'23.00'}
          rating={'4.5'}
          title={'Egg vegi Salad'}
          subtitle={'Description of the item'}
          imgUrl={`${process.env.PUBLIC_URL}/images/eggsalad.svg`} 
          />
      </div>
    </div>
  );
}

export default DishesSection;