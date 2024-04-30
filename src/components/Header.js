import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

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

  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden menu text-black bg-gray-400 block absolute rounded-sm shadow-xl right-0 z-20 transition">
      <ul className=" text-lg p-5">
        <li className="p-2">
          <Link to="/">HOME</Link>
        </li>
        <li className="p-2">
          <Link to="/about">SPEAKERS</Link>
        </li>
        <li className="p-2">
          <Link to="/">SPONSORSHIP</Link>
        </li>
        <li className="p-2">
          <Link to="/">TRAVEL</Link>
        </li>
        <li className="p-2">
          <Link to="/">FAQ</Link>
        </li>
        <li className="p-2">
          <Link to="/">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="font-serif text-black font-bold text-xl">
      <div className="flex justify-between z-50 lg:py-5 py-4">
        <div className="flex -mt-16 items-center flex-1">
          <img className="" alt="logo" src="logo.png" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
          <ul className="mr-12 -mt-14 flex gap-5 items-center">
            <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/about">SPEAKERS</Link>
            </li>
            <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/">SPONSORSHIP</Link>
            </li>
            <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/">TRAVEL</Link>
            </li>
            <li className="transition ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/">FAQ</Link>
            </li>
            <li className="transition mr-10 ease-in-out duration-300 hover:scale-110 cursor-pointer">
              <Link to="/">CONTACTUS</Link>
            </li>
            <button className="rounded-full p-2 bg-gradient-to-r from-red-600 to to-blue-700 text-white w-40">
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
