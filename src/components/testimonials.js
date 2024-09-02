import StarIcon from "./assets/starSVG";

const TestimonialsSection = () => {
  return ( 
    <div className="flex gap-[156px] justify-center items-center mt-[110px] interFont">
      <img src={`${process.env.PUBLIC_URL}/images/chef.png`}/>
      <div className="flex flex-col">
        <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText">
          TESTIMONIALS
        </p>
        <h1 className="text-[60px] font-bold mb-[29px]">What Our Customers <br/> Say About Us</h1>
        <p className="text-subText text-[26px] mb-[67px]">
          “I had the pleasure of dining at Foodi last night, and <br />
          I'm still raving about the experience! The attention to<br />
          detail in presentation and service was impeccable”
        </p>
        <div className="gap-[44px] items-center flex">
          <img src={`${process.env.PUBLIC_URL}/images/testImage.png`} />
          <div className="flex flex-col">
            <h2 className="font-semibold text-[26px]" >Costumer Feedback</h2>
            <p className="flex items-center gap-[15px] font-semibold text-muted mr-[44px] interFont text-gray-500 text-[24px]">
              <StarIcon />
              4.9 <span className="text-moreMuted text-[24px]" > (18.6k Reviews) </span> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;