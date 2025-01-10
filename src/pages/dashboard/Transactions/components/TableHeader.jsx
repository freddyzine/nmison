import React from "react";

const header = ["Trans ID", "Date", "Payment", "Status", "Amount"];

const TableHeader = () => {
  return (
    <div className="grid grid-cols-5 gap-4 py-3 min-w-[600px]">
      {header.map((item, idx) => (
        <div
          key={idx.toString()}
          className="col-span-1 flex justify-center items-center"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
