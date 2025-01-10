import React from "react";
import { Link } from "react-router-dom";
import { ContainedButton } from "./Button";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="pt-10 pb-5 w-full bg-white container mx-auto px-1 md:px-20">
        <div className="w-full grid xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="w-full">
            <img
              src={require("../assets/images/logo.png")}
              alt=""
              className="h-9 object-contain mb-3"
            />
            <p className="font-poppins pb-2 text-sm">
              No 3, PRODA Road Emene Industrial Layout, Emene Enugu
            </p>
          </div>
          <div className="w-full pl-0 md:pl-5">
            <h2 className="font-poppins pb-2 text-xl text-footer font-semibold">
              Find Product
            </h2>
            <ul className="flex items-start list-none flex-col px-1">
              <li className="py-1 font-medium font-poppins">
                <Link to={"/"}>Service</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#about"}>News</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Our Policy</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Customer Care</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="w-full pl-0 md:pl-5">
            <h2 className="font-poppins pb-2 text-xl text-footer font-semibold">
              Get Help
            </h2>
            <ul className="flex items-start list-none flex-col px-1">
              <li className="py-1 font-medium font-poppins">
                <Link to={"/"}>Contact Us</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#about"}>Return Policy</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Privacy Policy</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Terms</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <a href="https://www.office.nmienugu.com" target="_blank">Office</a>
              </li>
            </ul>
          </div>
          <div className="w-full pl-0 md:pl-5">
            <h2 className="font-poppins pb-2 text-xl text-footer font-semibold">
              About Us
            </h2>
            <ul className="flex items-start list-none flex-col px-1">
              <li className="py-1 font-medium font-poppins">
                <Link to={"/"}>Service</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#about"}>News</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Our Policy</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>Customer Care</Link>
              </li>
              <li className="py-1 font-medium font-poppins">
                <Link to={"/#services"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-poppins pb-4 text-xl text-black font-semibold">
              Subscribe for Updates & Newsletter
            </h2>
            <div className="w-full flex bg-services rounded-md">
              <input className="w-full outline-none bg-transparent px-2 font-poppins" />
              <ContainedButton text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="py-5 container mx-auto px-1 md:px-20 flex justify-between items-center">
          <p className="text-white font-poppins text-sm">
            ©2022 NMI,SON, ENUGU. All rights reserved
          </p>
          <div className="flex items-center">
            <BsTwitter className="text-xl mx-3 text-footer cursor-pointer" />
            <FaFacebookF className="text-xl mx-3 text-footer cursor-pointer" />
            <BsInstagram className="text-xl mx-3 text-footer cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
