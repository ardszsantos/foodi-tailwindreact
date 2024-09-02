const FooterComponent = () => {
  return (
    <div className="w-full mt-44">
      <div className="flex flex-col md:flex-row justify-between items-start px-8 py-12 mx-auto max-w-screen-xl">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4">
          <a href="#">
            <img
              
              src={`${process.env.PUBLIC_URL}/images/footerFoodi.png`}
              alt="store logo"
            />
          </a>
          <p className="text-subText text-[18px] leading-snug !mb-[184px] !mt-[37px]">
            Savor the artistry where <br /> every dish is a culinary <br /> masterpiece
          </p>
          <div className=" flex gap-[19px]">
            <a className="flex justify-center items-center w-[57px] h-[57px] bg-buttonGreen rounded-full" href="#">
              <img src={`${process.env.PUBLIC_URL}/images/facebook.svg`} alt="Facebook" className="w-6 h-6" />
            </a>
            <a className="flex justify-center items-center w-[57px] h-[57px] bg-buttonGreen rounded-full" href="#">
              <img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="Instagram" className="w-6 h-6" />
            </a>
            <a className="flex justify-center items-center w-[57px] h-[57px] bg-buttonGreen rounded-full"  href="#">
              <img src={`${process.env.PUBLIC_URL}/images/twitter.svg`} alt="Twitter" className="w-6 h-6" />
            </a>
            <a className="flex justify-center items-center w-[57px] h-[57px] bg-buttonGreen rounded-full"  href="#">
              <img src={`${process.env.PUBLIC_URL}/images/youtube.svg`} alt="YouTube" className="w-6 h-6" />
            </a>
            <div className="absolute ml-[25%] text-center text-sm text-subText py-6">
              <p>Copyright © 2024 Alexandre Rodrigues | All rights reserved</p>
            </div>
          </div>
      
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-[36px] mt-8 md:mt-0">
          <h4 className="font-semibold text-lg">Useful links</h4>
          <a href="#" className="text-subText">About us</a>
          <a href="#" className="text-subText">Events</a>
          <a href="#" className="text-subText">Blogs</a>
          <a href="#" className="text-subText">FAQ</a>
        </div>

        {/* Main Menu */}
        <div className="flex flex-col gap-[36px] mt-8 md:mt-0">
          <h4 className="font-semibold text-lg">Main Menu</h4>
          <a href="#" className="text-subText">Home</a>
          <a href="#" className="text-subText">Offers</a>
          <a href="#" className="text-subText">Menus</a>
          <a href="#" className="text-subText">Reservation</a>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-[36px] mt-8 md:mt-0">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <a href="mailto:example@email.com" className="text-subText">example@email.com</a>
          <p className="text-subText">+64 958 248 966</p>
          <a href="#" className="text-subText">Social media</a>
        </div>
      </div>

      {/* Copyright */}

    </div>
  );
};

export default FooterComponent;
