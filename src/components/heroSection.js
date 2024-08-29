const HeroSection = () => {
  return (
    <div className="flex items-center heroContainer mt-16 ml-48">
      <div className="pb-[130px] pl-[22px] flex flex-col gap-[56px] heroTextContainer">
        <h1 className="heroH1 text-[62px] font-extrabold	">
          Dive into Delights <br />
          Of Delectable 
          <span className="text-buttonGreen"> Food</span>
        </h1>
        <p className="text-[26px] font-medium text-subText">
          Where Each Plate Weaves a Story of Culinary <br/> Mastery and 
          Passionate Craftsmanship 
        </p>
        <div className="items-center flex gap-[35px] heroButtons">
          <button className="w-[229px] h-[80px] rounded-[40px] bg-buttonGreen">
            <span className="text-[26px] text-backgroundWhite font-semibold">Order Now</span>
          </button>
            <a href="#" className="flex items-center">
              <p className="text-[26px] text-subText font-semibold">Watch Video</p>
            <img src="/images/playbutton.png" className="mt-[2.6vw]" ></img>
            </a>
        </div>
      </div>
      <img className="pl-[100px]" src="/images/foodiHeroImage.png"></img>
    </div>
    );
}

export default HeroSection;