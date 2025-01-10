import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const header = ["ID", "Organization","Email", "Status", "Phone", "Action"];

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>

        {header.map((item, idx) => (
          <TableCell key={idx}>
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
