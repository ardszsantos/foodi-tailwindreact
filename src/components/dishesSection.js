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
    </div>
  );
}

export default DishesSection;