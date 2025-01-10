import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import ImagePreview from "./components/ImagePreview";
const products = [
  { id: 1, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 2, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 3, url: "http://africau.edu/images/default/sample.pdf" },
  { id: 4, url: "http://africau.edu/images/default/sample.pdf" },
];

const Certification = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-8">View Certificate</h2>
      <div className="w-full h-[100vh] mx-auto">
        <div className="w-full grid grid-cols-4 gap-5">
          {products.map((item) => (
            <ImagePreview item={item} key={item.id} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Certification;
