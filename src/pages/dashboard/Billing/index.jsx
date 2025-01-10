import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ContainedButton, OutlinedButton } from "../../../components/Button";
import DashboardLayout from "../../../layout/DashboardLayout";
import Product from "./components/Product";

const products = [
  { id: 1, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 2, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 3, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 4, url: "http://africau.edu/images/default/sample.pdf" },
];

const CallibrationBilling = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-8">View Callibration Bill</h2>
      <div className="w-full h-[100vh] mx-auto">
        <div className="w-full grid grid-cols-4 gap-5">
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
        <div className="w-full md:w-[60%] mx-auto mt-14">
          <p className="text-md my-3 text-center">
            If okay by you, request for a demand note, if not, contact us.
          </p>
          <div className="grid grid-cols-2 md:gap-4">
            <div className="col-span-2 md:col-span-1 mb-7">
              <Link to="/help">
                <OutlinedButton text="Contact Us" className="w-full" />
              </Link>
            </div>
            <div className="col-span-2 md:col-span-1 mb-7">
              <ContainedButton
                text="Request Demand Note"
                className="w-full"
                onClick={() =>
                  Swal.fire({
                    titleText: "Request Sent",
                    text: "Demand note request has been sent successfully.",
                    confirmButtonText: "Close",
                    confirmButtonColor: "#158A37",
                    icon: "success",
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CallibrationBilling;
