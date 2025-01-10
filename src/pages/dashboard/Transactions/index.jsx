import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

const details = [
  {
    trans_id: "#123456",
    date: "2022-10-23",
    payment: "Pending",
    status: "Pending",
    amount: 3000,
  },
  {
    trans_id: "#123457",
    date: "2022-10-23",
    payment: "Pending",
    status: "Approved",
    amount: 3000,
  },
  {
    trans_id: "#123458",
    date: "2022-10-23",
    payment: "Pending",
    status: "Pending",
    amount: 3000,
  },
  {
    trans_id: "#123459",
    date: "2022-10-23",
    payment: "Pending",
    status: "Cancelled",
    amount: 3000,
  },
];

const Transactions = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold pb-4">Transaction History</h2>
      <div className="py-3 px-3 rounded-md shadow-md mt-8 bg-white overflow-x-auto mb-5">
        <TableHeader />
        {details.map((item, index) => (
          <TableItem index={index} item={item} key={index.toString()} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
