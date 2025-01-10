import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../api/auth";
import { ContainedButton } from "../../components/Button";
import PasswordTextInput from "../../components/PasswordTextInput";
import { validatePassword } from "../../helpers/validation";
import AuthLayout from "../../layout/AuthLayout";

const ChangePassword = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const reset = async () => {
    setLoading(true);
    const { error, message } = await resetPassword({
      password,
      confirm_password: password,
    });
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    } else {
      toast.success(message);
      navigate("/login");
    }
  };

  const validate = () => {
    if (!validatePassword(password)) {
      toast.error("Must be up to 6 characters");
      return;
    }
    reset();
  };

  return (
    <AuthLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={require("../../assets/images/logo.png")}
          alt=""
          className="h-9 object-contain mb-3"
        />
        <h2 className="text-2xl font-roboto my-3 text-slate-800">
          Change Password
        </h2>
        <p className="text-center text-md text-slate-800 mb-3 font-roboto">
          Enter your desired password below
        </p>
        <div className="w-[100%] md:w-[70%]">
          <p className="text-md text-slate-800 mb-3 font-roboto">
            New Password
          </p>
          <PasswordTextInput
            value={password}
            setValue={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className="text-md text-slate-800 mb-3 font-roboto mt-4">
            Confirm New Password
          </p>
          <PasswordTextInput
            value={confirmPassword}
            setValue={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password"
            contClassName={"mb-7"}
          />
          <ContainedButton
            text={loading ? "Please wait..." : "Continue"}
            className="w-full"
            onClick={validate}
            disabled={loading}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ChangePassword;
