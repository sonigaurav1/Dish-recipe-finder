import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center mx-20 py-6  ">
        <h1 className="lobster-regular cursor-pointer transition-all hover:text-[#f60] ">
          Foodieland
        </h1>
        <ul className="flex gap-8 cursor-pointer transition-all ">
          <li className="hover:text-[#f60]">
            <Link to="/">Hero</Link>
          </li>
          <li className="hover:text-[#f60]">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="hover:text-[#f60]">
            <Link to="#blog">Blog</Link>
          </li>
          <li className="hover:text-[#f60]">
            <Link to="#contact">Contact</Link>
          </li>
          <li className="hover:text-[#f60]">
            <Link to="#aboutus">About Us</Link>
          </li>
        </ul>
        <div className="flex gap-4 text-xl items-center">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <FaInstagram className="cursor-pointer hover:text-red-600" />
          <FaXTwitter className="cursor-pointer hover:text-blue-500" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
