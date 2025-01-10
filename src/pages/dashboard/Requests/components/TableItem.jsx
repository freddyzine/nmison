import React, { useState } from "react";
import { statusColor } from "../../../../helpers/utils";
import { ViewRequest } from "./ViewRequest";
import { Visibility } from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";

const TableItem = ({ item }) => {
  const [view, setView] = useState(false);
  return (
    <>
    {view && <ViewRequest open={view} close={() => setView(false)} data={item}/>}
    <TableRow hover>
      <TableCell>
        {item._id}
      </TableCell>
      <TableCell>
        {item?.org_name}
      </TableCell>
      <TableCell>
        {item?.email}
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <div className="w-[10px] h-[10px] mr-2 rounded-full" style={{backgroundColor: statusColor(item?.status)}} />
          <p>{item?.status}</p>
        </div>
      </TableCell>
      <TableCell>{item?.phone_number}</TableCell>
      <TableCell>
        <IconButton onClick={() => setView(true)}>
          <Visibility />
        </IconButton>
      </TableCell>
    </TableRow>
    </>
  );
};

export default TableItem;
