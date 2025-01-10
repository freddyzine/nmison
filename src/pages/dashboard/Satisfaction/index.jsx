import React, { useState } from "react";
import { toast } from "react-toastify";
import { ContainedButton } from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import DashboardLayout from "../../../layout/DashboardLayout";

const Satisfaction = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if (message === "") {
      toast.error("Write your message");
      return;
    }
  };

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold font-poppins">
        Job Satisfaction Form
      </h2>
      <p className="pt-2 pb-4 font-roboto">
        Please give us feedback on your calibration work
      </p>
      <div className="w-full md:w-96 mt-6">
        <p className="text-md text-slate-800 mb-2 font-roboto">Full Name</p>
        <TextInput
          value={name}
          setValue={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          className={"bg-slate-300 rounded-md border-none"}
        />
        <p className="text-md text-slate-800 mb-2 font-roboto mt-4">
          Email Address
        </p>
        <TextInput
          type="email"
          value={email}
          setValue={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className={"bg-slate-300 rounded-md border-none"}
        />
        <p className="text-md text-slate-800 mb-2 font-roboto mt-4">
          Phone Number
        </p>
        <TextInput
          type="tel"
          value={phone}
          setValue={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone Number"
          className={"bg-slate-300 rounded-md border-none"}
        />
        <h2 className="mb-2 font-roboto text-md text-slate-800 mt-4">
          Message
        </h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          cols={3}
          className=" w-full resize-y bg-slate-300 rounded-md py-3 px-3 mb-3 font-roboto"
          placeholder="Write your message"
        ></textarea>
        <ContainedButton
          text="Send Message"
          className={"w-full"}
          onClick={validate}
        />
      </div>
    </DashboardLayout>
  );
};

export default Satisfaction;
