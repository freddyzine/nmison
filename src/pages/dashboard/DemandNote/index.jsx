import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import RemitaPayment from "react-remita";
import Swal from "sweetalert2";
import DashboardLayout from "../../../layout/DashboardLayout";
import ImagePreview from "./components/ImagePreview";

const products = [
  { id: 1, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 2, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 3, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 4, url: "http://africau.edu/images/default/sample.pdf" },
];

const DemandNote = () => {
  const navigate = useNavigate();
  const [paymentData] = useState({
    key: "U09MRHw0MDgxOTUzOHw2ZDU4NGRhMmJhNzVlOTRiYmYyZjBlMmM1YzUyNzYwZTM0YzRjNGI4ZTgyNzJjY2NjYTBkMDM0ZDUyYjZhZWI2ODJlZTZjMjU0MDNiODBlMzI4YWNmZGY2OWQ2YjhiYzM2N2RhMmI1YWEwYTlmMTFiYWI2OWQxNTc5N2YyZDk4NA==", // enter your key here
    customerId: "vincentovie39@gmail.com",
    firstName: "collins",
    lastName: "vincent",
    email: "vincentovie39@gmail.com",
    amount: 5000,
    narration: "this is a short narration",
  });

  let data = {
    ...paymentData,
    onSuccess: function (response) {
      Swal.fire({
        titleText: "Payment Successful",
        text: "Transaction was successful.",
        confirmButtonText: "View Requests",
        confirmButtonColor: "#158A37",
        icon: "success",
        preConfirm: () => {
          navigate("/request");
        },
      });
      console.log("callback Successful Response", response);
    },
    onError: function (response) {
      Swal.fire({
        titleText: "Payment Failed",
        text: "Transaction was not successful.",
        confirmButtonText: "Close",
        confirmButtonColor: "#158A37",
        icon: "error",
      });
      console.log("callback Error Response", response);
    },
    onClose: function () {
      console.log("closed");
    },
  };
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-8">View Demand Note</h2>
      <div className="w-full h-[100vh] mx-auto">
        <div className="w-full grid grid-cols-4 gap-5">
          {products.map((item) => (
            <ImagePreview item={item} key={item.id} />
          ))}
        </div>
        <div className="w-full md:w-[60%] mx-auto mt-14">
	  {/* Removed the Comment here to line 71 <RemitaPayment 
            remitaData={data}
            className="px-7 py-3 bg-primary text-white rounded-md text-sm w-full my-10"
            text="Proceed to payment with Remita"
            // add a 'live' prop to use the live urls/keys
          />*/}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DemandNote;
