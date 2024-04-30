import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  // Function to handle click outside of menu
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu") &&
      !event.target.closest(".menu-toggle")
    ) {
      setClick(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Update active tab based on the current location
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden menu text-black bg-gray-400 block absolute rounded-sm shadow-xl right-0 z-20 transition">
      <ul className=" text-lg p-5">
        <li className={`p-2 ${activeTab === "/" && "text-red-600"}`}>
          <Link to="/">HOME</Link>
        </li>
        <li className={`p-2 ${activeTab === "/about" && "text-red-600"}`}>
          <Link to="/about">SPEAKERS</Link>
        </li>
        <li className={`p-2 ${activeTab === "/sponsorship" && "text-red-600"}`}>
          <Link to="/sponsorship">SPONSORSHIP</Link>
        </li>
        <li className={`p-2 ${activeTab === "/travel" && "text-red-600"}`}>
          <Link to="/travel">TRAVEL</Link>
        </li>
        <li className={`p-2 ${activeTab === "/faq" && "text-red-600"}`}>
          <Link to="/faq">FAQ</Link>
        </li>
        <li className={`p-2 ${activeTab === "/contactus" && "text-red-600"}`}>
          <Link to="/contactus">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="font-serif  select-none text-black font-bold text-xl">
      <div className="flex justify-between z-50 lg:py-5 py-4">
        <div className="flex -mt-16 items-center flex-1">
          <img className="" alt="logo" src="logo.png" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
          <ul className="mr-12 -mt-14 flex gap-5 items-center">
            <li className={`transition ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/" && "text-red-600"}`}>
              <Link to="/">HOME</Link>
            </li>
            <li className={`transition ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/about" && "text-red-600"}`}>
              <Link to="/about">SPEAKERS</Link>
            </li>
            <li className={`transition ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/sponsorship" && "text-red-600"}`}>
              <Link to="/sponsorship">SPONSORSHIP</Link>
            </li>
            <li className={`transition ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/travel" && "text-red-600"}`}>
              <Link to="/travel">TRAVEL</Link>
            </li>
            <li className={`transition ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/faq" && "text-red-600"}`}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li className={`transition  ease-in-out duration-300 hover:scale-110 cursor-pointer ${activeTab === "/contactus" && "text-red-600"}`}>
              <Link to="/contactus">CONTACTUS</Link>
            </li>
            <button className="rounded-full p-2 bg-gradient-to-r from-red-600 to to-blue-700 text-white w-52">
              ↗ Buy Tickets
            </button>
          </ul>
        </div>
        <div>
          <div className="menu-toggle lg:hidden">
            {click ? (
              <img
                className="w-30 h-10 cursor-pointer "
                alt="cross"
                src="cross.png"
                onClick={handleClick}
              />
            ) : (
              <img
                className="w-30 h-10 cursor-pointer"
                alt="menu"
                src="menu-bar.png"
                onClick={handleClick}
              />
            )}
          </div>
          {click && content}
        </div>
      </div>
    </nav>
  );
};

export default Header;
