import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/recipes", name: "Recipes" },
    { path: "#blog", name: "Blog" },
    { path: "#contact", name: "Contact" },
    { path: "#aboutus", name: "About Us" },
  ];
  let active = "text-[#f60]";
  let unactive = "hover:text-[#f60]";
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <header className="">
      <nav className="flex justify-between items-center lg:mx-20 mx-4 py-6  ">
        <h1 className="lobster-regular cursor-pointer transition-all hover:text-[#f60] ">
          <Link to="/">Foodieland</Link>
        </h1>
        <ul className="flex gap-8 cursor-pointer transition-all ">
          {navLinks.map((link, index) => {
            return (
              <li
                aria-current="true"
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                className={selectedIndex == index ? active : unactive}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 text-xl items-center">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <a target="_blank" href="https://www.instagram.com/gaurav.web.dev/">
            <FaInstagram className="cursor-pointer hover:text-red-600" />
          </a>
          <a target="_blank" href="https://twitter.com/gauravwebdev_">
            <FaXTwitter className="cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
