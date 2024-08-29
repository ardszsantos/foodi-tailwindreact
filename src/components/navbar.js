import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return ( 
    <header className="mt-[47px] items-center flex w-[100vw]">

        <a href="#"><img className="ml-[154px] mr-[203px] w-[135px] h-[60px]" src='foodi.png' alt="store logo" /></a>
        <nav className="flex items-center justify-between w-full">
        <div className="navAText flex gap-[60px]">
          <a href="#">Home</a>

          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-2">
              Menu
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L7.65685 7.65685"
                  stroke="#39DB4A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M13.6569 2L8.00001 7.65685"
                  stroke="#39DB4A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute mt-2 w-40 bg-white shadow-lg rounded-md`}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
            </div>
          </div>

          <div className="relative">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center gap-2">
              Services
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L7.65685 7.65685"
                  stroke="#39DB4A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M13.6569 2L8.00001 7.65685"
                  stroke="#39DB4A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className={`${isServicesOpen ? 'block' : 'hidden'} absolute mt-2 w-40 bg-white shadow-lg rounded-md`}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
            </div>
          </div>

          <a href="#">Offers</a>
        </div>
          <div className="flex items-center gap-[43px] mr-[154px]">
          <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
            <a href="#">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></a>
            <button className="flex items-center justify-center gap-[14px] w-[179px] h-[60px] rounded-[40px] bg-buttonGreen">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Contact
            </button>
          </div>
        </nav>
    </header>
  );
}

export default NavBar;