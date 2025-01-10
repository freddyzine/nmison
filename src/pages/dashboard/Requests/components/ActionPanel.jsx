import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiFillFile } from "react-icons/ai";
import { TfiBriefcase } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const ActionPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute right-20 md:right-28 py-3 px-3 rounded-md shadow-lg z-30 bg-white min-w-[180px]">
      <div className="flex items-center cursor-pointer">
        <IoIosCloseCircle className="text-red-600 text-lg mr-2" />
        <p className="font-poppins text-sm">Cancel</p>
      </div>
      <div
        className="flex items-center mt-2 cursor-pointer"
        onClick={() => navigate("callibration-billing")}
      >
        <HiOutlineMenuAlt2 className="text-black text-lg mr-2" />
        <p className="font-poppins text-sm">Callibration Bill</p>
      </div>
      <div
        className="flex items-center mt-2 cursor-pointer"
        onClick={() => navigate("demand-note")}
      >
        <AiFillFile className="text-black text-lg mr-2" />
        <p className="font-poppins text-sm">Demand Note</p>
      </div>
      <div
        className="flex items-center mt-2 cursor-pointer"
        onClick={() => navigate("satisfaction/1")}
      >
        <TfiBriefcase className="text-black text-lg mr-2" />
        <p className="font-poppins text-sm">Satisfaction Form</p>
      </div>
      <div
        className="flex items-center mt-2 cursor-pointer"
        onClick={() => navigate("certificate")}
      >
        <MdVerified className="text-green-800 text-lg mr-2" />
        <p className="font-poppins text-sm">Certificate</p>
      </div>
    </div>
  );
};

export default ActionPanel;
