import FoodCard from "./assets/card";

const PopularCategories = () => {
  const img1 = "foodi-tailwindreact/images/burger.png";
  const img2 = "foodi-tailwindreact/images/sandwich.png";
  const img3 = "foodi-tailwindreact/images/iceCream.png";
  const img4 = "foodi-tailwindreact/images/orangeJuice.png";
  return ( 
    <div className="flex flex-col items-center mt-24 popContainer text-center">
      <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText">
        CUSTOMER FAVORITES
      </p>
      <h1 className="popH1 text-[60px] font-bold">
        Popular Categories
      </h1>
      <div className="mt-20 gap-10 m- popCategoriesCards flex">
        <FoodCard imgUrl={img1} title={'Main Dish'} subtitle={'(86 Categories)'}/>
        <FoodCard imgUrl={img2} title={'Break Fast'} subtitle={'(12 Categories)'} />
        <FoodCard imgUrl={img3} title={'Dessert'} subtitle={'(48 Categories)'} />
        <FoodCard imgUrl={img4} title={'Browse All'} subtitle={'(255 Items)'} />
      </div>
    </div>
  );
}

export default PopularCategories;