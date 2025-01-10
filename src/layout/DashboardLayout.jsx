import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiTask, BiHelpCircle } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { IoSettingsOutline, IoMenuOutline } from "react-icons/io5";
import { userStore } from "../store/userStore";
import { authStore } from "../store/authStore";
// import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const logout = async () => {
    authStore.updateLogin(false);
    authStore.updateToken(null);
    authStore.updateUuid(null);
    authStore.updateResetToken("");
    userStore.updateUser(null);
    userStore.updateEmail("");
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-[0px] hidden md:flex md:w-[30%] max-w-[250px] h-full bg-white  flex-col justify-between">
        <div className="w-full">
          <div className="w-full overflow-hidden mb-10">
            <Link to="/">
              <img
                src={require("../assets/images/logo.png")}
                alt=""
                className="w-[160px] object-contain mt-6 mb-4 mx-auto"
              />
            </Link>
          </div>
          <ul className="flex items-start list-none flex-col px-4 ">
            <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-lg">
              <BiTask className="text-2xl mr-3" />
              <Link to={"/request"}>Requests</Link>
            </li>
            {/* <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-lg">
              <BsCreditCard className="text-2xl mr-3" />
              <Link to={"/transactions"}>Transactions</Link>
            </li> */}
            <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-lg">
              <IoSettingsOutline className="text-2xl mr-3" />

              <Link to={"/settings"}>Settings</Link>
            </li>
            <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-lg">
              <BiHelpCircle className="text-2xl mr-3" />
              <Link to={"/help"}>Help</Link>
            </li>
          </ul>
        </div>
        <div className="w-full mb-5">
          <ul className="flex items-start list-none flex-col px-4 cursor-pointer">
            <li 
              className="py-2 font-medium font-poppins flex items-center text-primary text-lg"
              onClick={logout}
            >
              <BiTask className="text-2xl mr-3" />
              <p>Sign-out</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-primary bg-opacity-20">
        <div className="w-full py-5 bg-white">
          <div className="w-full flex justify-between items-center md:justify-end px-5 md:px-10">
            <IoMenuOutline
              className="block md:hidden text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <div className="flex items-center">
              <p className="text-lg mr-5">
                {`${userStore.getUser.user?.first_name || ""} ${userStore.getUser.user?.last_name || ""}`}
              </p>
              {/* <Link to="/">
                <img
                  src={require("../assets/images/profile-pic.png")}
                  alt=""
                  className="w-[50px] h-[50px] object-cover rounded-full"
                />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="py-5 px-5 w-full md:px-10 h-auto max-h-[86%] md:max-h-[88%] overflow-y-auto">
          {children}
        </div>
      </div>
      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-opacity-30 bg-black block md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className=" w-[58%] sm:w-[35%] bg-white h-full py-3 flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full overflow-hidden mb-10">
                <img
                  src={require("../assets/images/logo.png")}
                  alt=""
                  className="w-[130px] object-contain my-3 mx-auto"
                />
              </div>
              <ul className="flex items-start list-none flex-col px-4 ">
                <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-md">
                  <BiTask className="text-xl mr-3" />
                  <Link to={"/request"}>Requests</Link>
                </li>
                <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-md">
                  <BsCreditCard className="text-xl mr-3" />
                  <Link to={"/transactions"}>Transactions</Link>
                </li>
                <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-md">
                  <IoSettingsOutline className="text-xl mr-3" />

                  <Link to={"/settings"}>Settings</Link>
                </li>
                <li className="py-2 font-medium font-poppins flex items-center text-slate-500 text-md">
                  <BiHelpCircle className="text-xl mr-3" />
                  <Link to={"/help"}>Help</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-5">
              <ul className="flex items-start list-none flex-col px-4 sursor-pointer">
                <li 
                  className="py-2 font-medium font-poppins flex items-center text-primary text-lg"
                  onClick={logout}
                >
                  <BiTask className="text-2xl mr-3" />
                  <p>Sign-out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
