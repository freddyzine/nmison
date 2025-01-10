import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { editUser, fetchUser } from "../../../../api/user";
import { ContainedButton } from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import { validateName, validatePhone } from "../../../../helpers/validation";
import { userStore } from "../../../../store/userStore";

const PersonalDetails = observer(() => {
  const [inputs, setInputs] = useState(userStore.getUser.user)
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const { error, message, data } = await fetchUser();
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }
    userStore.updateUser(data);
  };

  useEffect(() => {
    if(!userStore.getUser.user) getUser()
  }, [])



  const editAccount = async () => {
    setLoading(true);
    const { error, message, data } = await editUser(inputs);
    setLoading(false);

    if (error) {
      toast.error(message);
      return;
    }
    toast.success(message);
    userStore.updateUser(data)
  };

  const submit = (e) => {
    e.preventDefault()
    editAccount();
  };
  return (
    <form className="w-full grid grid-cols-2 gap-4 my-3" onSubmit={submit}>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">First Name</p>
        <TextInput
          value={inputs?.first_name}
          setValue={(e) => setInputs(state => ({...state, first_name: e.target.value}))}
          placeholder="Enter first name"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">Last Name</p>
        <TextInput
          value={inputs?.last_name}
          setValue={(e) => setInputs(state => ({...state, last_name: e.target.value}))}
          placeholder="Enter last name"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">Phone Number</p>
        <TextInput
          value={inputs?.phone_number}
          type="tel"
          setValue={(e) => setInputs(state => ({...state, phone_number: e.target.value}))}
          placeholder="Enter phone number"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">Address</p>
        <TextInput
          value={inputs?.address}
          type="text"
          setValue={(e) => setInputs(state => ({...state, address: e.target.value}))}
          placeholder="Enter Address"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">State</p>
        <TextInput
          value={inputs?.lga}
          type="text"
          setValue={(e) => setInputs(state => ({...state, lga: e.target.value}))}
          placeholder="Enter State"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-md text-slate-800 mb-2 font-roboto">LGA</p>
        <TextInput
          value={inputs?.state}
          type="text"
          setValue={(e) => setInputs(state => ({...state, state: e.target.value}))}
          placeholder="Enter Local Gov. Area"
          className="bg-transparent text-md rounded-md"
        />
      </div>
      <div className="col-span-2">
        <ContainedButton
          text={loading ? "Please wait..." : "Update Details"}
          className="w-full mt-4"
          type="submit"
          disabled={loading}
        />
      </div>
    </form>
  );
});

export default PersonalDetails;
