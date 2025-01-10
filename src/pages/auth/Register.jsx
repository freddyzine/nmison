import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainedButton } from "../../components/Button";
import PasswordTextInput from "../../components/PasswordTextInput";
import TextInput from "../../components/TextInput";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "../../helpers/validation";
import AuthLayout from "../../layout/AuthLayout";
import { toast } from "react-toastify";
import { register } from "../../api/auth";
import { userStore } from "../../store/userStore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [lga, setLGA] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async () => {
    setLoading(true);
    const { data, error, message } = await register({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      state: state,
      lga,
      address,
      password,
      confirm_password: confirmPassword,
    });
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }
    console.log(data);
    userStore.updateEmail(email);
    navigate("/verify");
  };

  const validate = () => {
    if (!validateEmail(email)) {
      toast.error("Invalid Email Address");
      return;
    } else if (!validatePhone(phone)) {
      toast.error("Invalid Phone Number");
      return;
    } else if (!validatePassword(password)) {
      toast.error("Invalid Password");
      return;
    } else if (!validateConfirmPassword(password, confirmPassword)) {
      toast.error("Passwords do not match.");
      return;
    } else if (!validateName(firstName)) {
      toast.error("Invalid First Name.");
      return;
    } else if (!validateName(lastName)) {
      toast.error("Invalid Last Name.");
      return;
    } else if (!validateName(address)) {
      toast.error("Invalid Address.");
      return;
    } else if (!validateName(state)) {
      toast.error("Invalid First Name.");
      return;
    } else if (lga === "") {
      toast.error("Invalid LGA.");
      return;
    }
    signup();
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col items-center pb-0">
        <img
          src={require("../../assets/images/logo.png")}
          alt=""
          className="h-9 object-contain mb-3"
        />
        <h2 className="text-2xl font-roboto my-3 text-slate-800">
          Email Registration
        </h2>
        <p className="text-center text-md text-slate-800 mb-3 font-roboto">
          Fill input with the information below
        </p>
        <div className="w-full grid grid-cols-2 gap-4 md:w-[90%]">
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">
              Email Address
            </p>
            <TextInput
              type="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">
              Phone Number
            </p>
            <TextInput
              value={phone}
              type="tel"
              setValue={(e) => setPhone(e.target.value)}
              placeholder="07028378293"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">
              Enter Password
            </p>
            <PasswordTextInput
              value={password}
              setValue={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">
              Confirm Password
            </p>
            <PasswordTextInput
              value={confirmPassword}
              setValue={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">
              First Name
            </p>
            <TextInput
              type="text"
              value={firstName}
              setValue={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">Last Name</p>
            <TextInput
              value={lastName}
              type="text"
              setValue={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-md text-slate-800 mb-2 font-roboto">Address</p>
            <TextInput
              value={address}
              type="text"
              setValue={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />
          </div>
          <div className="w-full col-span-2 md:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <p className="text-md text-slate-800 mb-2 font-roboto">State</p>
              <TextInput
                value={state}
                type="text"
                setValue={(e) => setState(e.target.value)}
                placeholder="Enter State"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-md text-slate-800 mb-2 font-roboto">LGA</p>
              <TextInput
                value={lga}
                type="text"
                setValue={(e) => setLGA(e.target.value)}
                placeholder="Enter Local goverment area"
              />
            </div>
          </div>
          <div className="col-span-2">
            <ContainedButton
              text={loading ? "Please wait..." : "Continue"}
              className="w-full mt-5"
              onClick={validate}
              disabled={loading}
            />
          </div>
        </div>
        <p className="text-slate-500 text-sm pt-4">
          Already have a account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
