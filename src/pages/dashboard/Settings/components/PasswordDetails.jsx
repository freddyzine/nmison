import React, { useState } from "react";
import { toast } from "react-toastify";
import { resetPassword } from "../../../../api/auth";
import { ContainedButton } from "../../../../components/Button";
import PasswordTextInput from "../../../../components/PasswordTextInput";
import { validatePassword } from "../../../../helpers/validation";

const PasswordDetails = () => {
  const [inputs, setInputs] = useState({
    old_password: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);

  const resetAccountPassword = async () => {
    setLoading(true);
    const { error, message } = await resetPassword(inputs);
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }
    setInputs(state => ({...state, old_password: '', password: ""}))
    toast.success(message);
  };

  const validate = () => {
    if (!validatePassword(inputs.old_password)) {
      toast.error("Please enter your old password.");
      return;
    } else if (!validatePassword(inputs.password)) {
      toast.error("Password your new password.");
      return;
    }
    resetAccountPassword();
  };
  return (
    <div className="w-full grid grid-cols-2 gap-4 my-3">
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">Old Password</p>
        <PasswordTextInput
          value={inputs.old_password}
          setValue={(e) => setInputs(state => ({...state, old_password: e.target.value}))}
          placeholder="Enter old password"
          className="bg-transparent text-md rounded-md"
          contClassName={"rounded-md"}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">New Password</p>
        <PasswordTextInput
          value={inputs.password}
          setValue={(e) => setInputs(state => ({...state, password: e.target.value}))}
          placeholder="Enter new password."
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2">
        <ContainedButton
          text={loading ? "Please wait..." : "Save Changes"}
          className="w-full mt-4"
          onClick={validate}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default PasswordDetails;
