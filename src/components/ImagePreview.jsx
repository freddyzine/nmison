import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import React from "react";
//import { BsDownload } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import { useState } from "react";

const ImagePreview = ({ item, onDelete }) => {
  const [loading, setLoading] = useState({
    del: false
  })
  return (
    <div className="col-span-2 lg:col-span-1 rounded-lg overflow-hidden">
      <div className="bg-white h-[130px] flex justify-center items-center">
        <GrDocumentText className="text-white text-[50px]" />
      </div>
      <div className="flex justify-end py-1 px-3 bg-primary cursor-pointer w-full">
 
        <a href={item?.url} target="_blank" className="">
          <Tooltip title="Download">
            <IconButton size="small">
              <DownloadIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default ImagePreview;
