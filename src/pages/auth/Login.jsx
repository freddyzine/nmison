import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "../../api/auth";
import { ContainedButton } from "../../components/Button";
import PasswordTextInput from "../../components/PasswordTextInput";
import TextInput from "../../components/TextInput";
import { validateEmail, validatePassword } from "../../helpers/validation";
import AuthLayout from "../../layout/AuthLayout";
import { authStore } from "../../store/authStore";
import { userStore } from "../../store/userStore";

const Login = () => {
  const [email, setEmail] = useState("me@gmail.com");
  const [password, setPassword] = useState("1234567");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    const { data, message, error, status } = await signin({ email, password });
    setLoading(false);

    if (error) {
      console.log(data)
      toast.error(message);
      if (status === 400) {
        if("is_verified" in data && !data?.is_verified){
          userStore.updateEmail(email);
          navigate("/verify");
        }
      }
      return;
    }

    authStore.updateToken(data?.token);
    authStore.updateLogin(true);
    // navigate("/request");
  };

  const validate = () => {
    if (!validateEmail(email)) {
      toast.error("Invalid Email Address");
      return;
    } else if (!validatePassword(password)) {
      toast.error("Invalid Password");
      return;
    }

    login();
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
          Welcome Back!
        </h2>
        <p className="text-center text-md text-slate-800 mb-3 font-roboto">
          Login by entering the information below
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
          />
          <p className="text-md text-slate-800 mb-3 font-roboto mt-4">
            Enter Password
          </p>
          <PasswordTextInput
            value={password}
            setValue={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="w-full flex justify-end">
            <Link
              to="/forgot"
              className="text-primary text-sm py-2 font-roboto"
            >
              Recover Password?
            </Link>
          </div>
          <ContainedButton
            text={loading ? "Please wait..." : "Continue"}
            className="w-full"
            onClick={validate}
            disabled={loading}
          />
        </div>
        <p className="text-slate-500 text-sm pt-4">
          Don’t have a account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
