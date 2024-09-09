import FoodCard from "./assets/card";

const PopularCategories = () => {
  const img1 = `${process.env.PUBLIC_URL}/images/burger.png`;
  const img2 = `${process.env.PUBLIC_URL}/images/sandwich.png`;
  const img3 = `${process.env.PUBLIC_URL}/images/iceCream.png`;
  const img4 = `${process.env.PUBLIC_URL}/images/orangeJuice.png`;
  return ( 
    <div className="flex flex-col items-center mt-14 popContainer text-center">
      <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText ">
        CUSTOMER FAVORITES
      </p>
      <h1 className="interFont text-[60px] font-bold">
        Popular Categories
      </h1>
      <div className="mt-20 gap-10 m- popCategoriesCards flex below-xl:flex below-xl:flex-col">
        <FoodCard imgUrl={img1} title={'Main Dish'} subtitle={'(86 Categories)'}/>
        <FoodCard imgUrl={img2} title={'Break Fast'} subtitle={'(12 Categories)'} />
        <FoodCard imgUrl={img3} title={'Dessert'} subtitle={'(48 Categories)'} />
        <FoodCard imgUrl={img4} title={'Browse All'} subtitle={'(255 Items)'} />
      </div>
    </div>
  );
}

export default PopularCategories;