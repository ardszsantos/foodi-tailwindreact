import ServicesCard from "./assets/servicesCard";

const OurStoryServices = () => {
  return (  
    <div className="flex items-center justify-center ml-60 mt-[140px]  below-xl:ml-6  " > 
      <div>
        <p className="mb-[29px] popUpperText text-[20px] font-bold text-sectionDscText">
          OUR STORY & SERVICES
        </p>
        <h1 className="font-bold interFont text-[60px]">
          Our Culinary Journey <br/>
          And Services
        </h1>
        <p className=" text-[26px] text-subText mt-[50px]">
          Rooted in passion, we curate unforgettable dining <br/>
          experiences and offer exceptional services, <br/>
          blending culinary artistry with warm hospitality.
        </p>
        <button className="w-[215px] mt-[53px] h-[80px] rounded-[40px] bg-buttonGreen">
          <span className="text-[26px] text-backgroundWhite font-semibold">
            Explore
          </span>
        </button>
      </div>
      <div className="mr-40 ml-40 grid grid-cols-1 md:grid-cols-2 place-items-center below-xl:mr-0">
        <ServicesCard title={'CATERING'} subtitle={'Delight your guests with our flavors and presentation'} imgUrl={`${process.env.PUBLIC_URL}/images/cardSalad.png`}/>
        <ServicesCard title={'FAST DELIVERY'} subtitle={'We deliver your order promptly to your door'} imgUrl={`${process.env.PUBLIC_URL}/images/fastDelivery.png`} />
        <ServicesCard title={'ONLINE ORDERING'} subtitle={'Explore menu & order with ease using our Online Ordering '} imgUrl={`${process.env.PUBLIC_URL}/images/cardShopping.png`} />
        <ServicesCard title={'GIFT CARDS'} subtitle={'Give the gift of exceptional dining with Foodi Gift Cards'} imgUrl={`${process.env.PUBLIC_URL}/images/gift.png`} />
      </div>
    </div>
  );
}

export default OurStoryServices;