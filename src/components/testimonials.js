const TestimonialsSection = () => {
  return ( 
    <div className="flex justify-center items-center mt-[125px] interFont">
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
        <div className="flex">
          <img src={`${process.env.PUBLIC_URL}/images/testImage.png`} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;