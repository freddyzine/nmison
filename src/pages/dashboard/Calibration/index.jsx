import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserRequest } from "../../../api/requests";
import { ContainedButton } from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../../helpers/validation";
import DashboardLayout from "../../../layout/DashboardLayout";
import Instrument from "./Instruments";
import { useNavigate } from "react-router-dom";

const Calibration = () => {
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instruments, setInstruments] = useState([])
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const sendCalibrationRequest = async (data) => {
    console.log(data)
    setLoading(true);
    const { error, message } = await createUserRequest(data);
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }

    navigate("/request")
    toast.success(message);
  };

  const validate = async () => {
    if (!validateName(organization)) {
      return toast.error("Name of Org. should be more than 3 characters.");
    } else if (!validateName(address)) {
      return toast.error("Address should be more than 3 characters.");
    } else if (!validateEmail(email)) {
      return toast.error("Email address is invalid.");
    } else if (!validatePhone(phone)) {
      return toast.error("Invalid phone number.");
    } 

    await sendCalibrationRequest({
      org_name: organization,
      email,
      address,
      phone_number: phone,
      instrument: JSON.stringify(instruments),
      extra_info: info,
    });
  };
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold">Request calibration</h2>
      <p className="pt-2 pb-4">
        Fill the calibration request form below to proceed.
      </p>
      <div className="w-full grid grid-cols-2 gap-5">
        <div className="col-span-2 md:col-span-1">
          <p className="text-md text-slate-800 mb-2 font-roboto">
            Name of Organization
          </p>
          <TextInput
            value={organization}
            setValue={(e) => setOrganization(e.target.value)}
            placeholder="Coina Global"
            className={
              "bg-transparent border border-solid border-slate-500 rounded-md"
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-md text-slate-800 mb-2 font-roboto">
            Contact Address
          </p>
          <TextInput
            value={address}
            setValue={(e) => setAddress(e.target.value)}
            placeholder="Plot 47, Industrial layout, Trans Amadi, Port Harcourt"
            className={
              "bg-transparent border border-solid border-slate-500 rounded-md"
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-md text-slate-800 mb-2 font-roboto">
            Email Address
          </p>
          <TextInput
            value={email}
            setValue={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            className={
              "bg-transparent border border-solid border-slate-500 rounded-md"
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-md text-slate-800 mb-2 font-roboto">
            Phone Number
          </p>
          <TextInput
            value={phone}
            setValue={(e) => setPhone(e.target.value)}
            placeholder="08143578324"
            className={
              "bg-transparent border border-solid border-slate-500 rounded-md"
            }
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-slate-500 mb-2">List Instruments</h2>
          <Instrument instruments={instruments} setInstruments={setInstruments} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-slate-500 mb-2">Extra Information</h2>
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            rows={4}
            cols={3}
            className=" w-full resize-y bg-transparent border border-solid border-slate-500 rounded-md py-3 px-3"
            placeholder="Provide extra information e.g, serial number, make"
          ></textarea>
        </div>
        <div className="col-span-2 md:col-span-1">
          <ContainedButton
            text={loading ? "Please wait..." : "Submit Request"}
            className={"w-full mt-8"}
            onClick={validate}
            disabled={loading}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calibration;
