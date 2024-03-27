import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = ({index}) => {

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/recipes", name: "Recipes" },
    { path: "#blog", name: "Blog" },
    { path: "#contact", name: "Contact" },
    { path: "#aboutus", name: "About Us" },
  ];
  let active = "text-[#f60] hidden lg:block";
  let unactive = "hover:text-[#f60] hidden lg:block";

  const [selectedIndex, setSelectedIndex] = useState(index || 0);


  function handleMenuOpen() {
    document.body.classList.add("fixed")
    const menu = document.querySelector(".mobile-nav");
    menu.classList.remove("closed-menu");
    menu.classList.add("open-menu");
  }
  function handleMenuClose() {
    document.body.classList.remove("fixed")
    const menu = document.querySelector(".mobile-nav");
    menu.classList.add("closed-menu");
    menu.classList.remove("open-menu");
  }
  return (
    <header className="">
      <nav className="flex justify-between items-center py-6  ">
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
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mobile-menu lg:hidden"
              onClick={handleMenuOpen}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>

        <div className="lg:flex gap-4 text-xl items-center hidden">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <a target="_blank" href="https://www.instagram.com/gaurav.web.dev/">
            <FaInstagram className="cursor-pointer hover:text-red-600" />
          </a>
          <a target="_blank" href="https://twitter.com/gauravwebdev_">
            <FaXTwitter className="cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </nav>

      <div className="mobile-nav closed-menu transition-all lg:hidden bg-white min-h-full fixed top-0 left-0 w-full flex justify-center items-center text-center z-50 ">
        <span className="absolute right-8 top-8 text-5xl  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleMenuClose}
            className="cursor-pointer  "
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul
          className="flex flex-col text-4xl space-y-8  "
          onClick={() => handleMenuClose()}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="#blog">Blog</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#about">About Us</Link>
          </li>
          <div className="flex space-x-5">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <a target="_blank" href="https://www.instagram.com/gaurav.web.dev/">
              <FaInstagram className="cursor-pointer hover:text-red-600" />
            </a>
            <a target="_blank" href="https://twitter.com/gauravwebdev_">
              <FaXTwitter className="cursor-pointer hover:text-blue-500" />
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
