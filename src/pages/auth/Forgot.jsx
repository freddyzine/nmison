import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendOtp } from "../../api/auth";
import { ContainedButton } from "../../components/Button";
import TextInput from "../../components/TextInput";
import { validateEmail } from "../../helpers/validation";
import AuthLayout from "../../layout/AuthLayout";
import { userStore } from "../../store/userStore";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const send = async () => {
    setLoading(true);
    const { data, error, message } = await sendOtp(JSON.stringify({email}));
    setLoading(false);
    if (error) {
      toast.error(message);
      return;
    } else {
      toast.success(message)
      userStore.updateEmail(email);
      navigate("/verify-forgot");
    }
  };

  const validate = () => {
    if (!validateEmail(email)) {
      toast.error("Invalid Email Address");
      return;
    }
    send();
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
          Forgot Password
        </h2>
        <p className="text-center text-md text-slate-800 mb-3 font-roboto">
          Enter email address below to recover account.
        </p>
        <div className="w-[100%] md:w-[70%]">
          <p className="text-md text-slate-800 mb-3 font-roboto">
            Enter email address
          </p>
          <TextInput
            value={email}
            setValue={(e) => setEmail(e.target.value)}
            placeholder="abc@exmaple.com"
            type="email"
            className={"mb-6"}
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

export default Forgot;
