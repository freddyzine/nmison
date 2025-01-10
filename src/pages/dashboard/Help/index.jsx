import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";

const Help = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold mb-6 mr-3">Get Help</h2>
      <h2 className="text-md mb-2">
        Reach out to us through the contacts below to assist you better
      </h2>
      <h2 className="text-md mb-2 mr-3">
        Email:{" "}
        <a
          href="mailto:nmienugu@son.gov.ng"
          className="text-primary hover:underline"
        >
          nmienugu@son.gov.ng
        </a>{" "}
        |{" "}
        <a
          href="mailto:nmienugu@gmail.com"
          className="text-primary hover:underline"
        >
          nmienugu@gmail.com
        </a>
      </h2>
      <h2 className="text-md">
        Tel:{" "}
        <a href="tel:08059703017" className="text-primary hover:underline">
          08059703017
        </a>{" "}
        |{" "}
        <a
          href="mailto:nmienugu@gmail.com"
          className="text-primary hover:underline"
        >
          nmienugu@gmail.com
        </a>
      </h2>
    </DashboardLayout>
  );
};

export default Help;
