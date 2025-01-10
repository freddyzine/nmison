import moment from "moment";
import React from "react";

const TableItem = ({ item }) => {
  return (
    <div className="grid grid-cols-5 gap-4 py-3 border-t border-slate-500 border-solid min-w-[600px]">
      <div className="col-span-1 flex justify-center items-center">
        {item.trans_id}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {moment(item.date).format("DD/MM/YYYY")}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {item.payment}
      </div>
      <div
        className={`col-span-1 flex justify-center items-center ${
          item.status.toLowerCase() === "pending"
            ? "text-pending"
            : item.status.toLowerCase() === "approved"
            ? "text-approved"
            : "text-cancel"
        }`}
      >
        {item.status}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        ₦{item.amount.toLocaleString()}
      </div>
    </div>
  );
};

export default TableItem;
