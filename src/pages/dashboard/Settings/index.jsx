import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import PasswordDetails from "./components/PasswordDetails";
import PersonalDetails from "./components/PersonalDetails";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="w-full max-w-[700px]">
        <h2 className="text-2xl font-semibold pb-4 w-full pt-6">
          Personal Details
        </h2>
        <PersonalDetails />
        <h2 className="text-2xl font-semibold pb-4 w-full pt-6">
          Change Password
        </h2>
        <PasswordDetails />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
