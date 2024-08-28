const NavBar = () => {
  return ( 
    <header className="mt-[47px] items-center flex w-[100vw]">
      <img className="ml-[154px] mr-[203px] w-[115px] h-[51px]" src='foodi.png' alt="store logo" />
        <nav className="flex items-center justify-between">
          <div className="flex gap-[57px]">
            <a>Home</a>
            <a>Menu</a>
            <a>Services</a>
            <a>Offers</a>
          </div>
          <button className="w-[179px] h-[60px] rounded-[40px] bg-buttonGreen">Contact</button>
        </nav>

    </header>
  );
}

export default NavBar;