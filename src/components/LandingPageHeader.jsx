import React, { useState } from "react";
import { ContainedButton } from "./Button";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { authStore } from "../store/authStore";
import { NavHashLink } from 'react-router-hash-link';

const LandingPageHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 w-full bg-white drop-shadow-md">
      <div className="container flex justify-between items-center py-3 bg-white mx-auto px-5 md:px-20">
        <Link to="/">
          <img
            src={require("../assets/images/logo.png")}
            alt=""
            className="h-9 object-contain"
          />
        </Link>
        <ul className="hidden md:flex items-center list-none">
          <li className="px-3 font-medium font-poppins">
            <NavHashLink smooth to={"/#"}>Home</NavHashLink>
          </li>
          <li className="px-3 font-medium font-poppins">
            <NavHashLink smooth to={"/#about"}>About Us</NavHashLink>
          </li>
          <li className="px-3 font-medium font-poppins">
            <NavHashLink smooth to={"/#services"}>Services</NavHashLink>
          </li>
        </ul>
        <Link to={authStore.authDetails.isLoggedIn ? "/request" : "/login"}>
          <ContainedButton
            text={
              authStore.authDetails.isLoggedIn ? "Dashboard" : "Login/Register"
            }
            className="hidden md:block"
          />
        </Link>
        <RxHamburgerMenu
          className="block md:hidden text-lg"
          onClick={() => setOpen(true)}
        />
        {open && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-opacity-30 bg-black"
            onClick={() => setOpen(false)}
          >
            <div className=" w-[65%] bg-white h-full py-3">
              <Link to="/">
                <img
                  src={require("../assets/images/logo.png")}
                  alt=""
                  className="h-9 object-contain my-3 mx-auto"
                />
              </Link>
              <hr className="border-1 border-slate-300 border-solid mb-3" />
              <ul className="flex items-start list-none flex-col px-3">
                <li className="py-1 font-medium font-poppins">
                  <NavHashLink smooth to={"/#"}>Home</NavHashLink>
                </li>
                <li className="py-1 font-medium font-poppins">
                  <NavHashLink smooth to={"/#about"}>About Us</NavHashLink>
                </li>
                <li className="py-1 font-medium font-poppins">
                  <NavHashLink smooth to={"/#services"}>Services</NavHashLink>
                </li>
                <li className="py-1 font-medium font-poppins">
                  <Link
                    to={
                      authStore.authDetails.isLoggedIn ? "/request" : "/login"
                    }
                  >
                    <ContainedButton
                      text={
                        authStore.authDetails.isLoggedIn
                          ? "Dashboard"
                          : "Login/Register"
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageHeader;
