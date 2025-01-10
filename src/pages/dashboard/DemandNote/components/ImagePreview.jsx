import React from "react";
import { BsDownload } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";

const ImagePreview = ({ item }) => {
  return (
    <div className="col-span-2 lg:col-span-1 rounded-lg overflow-hidden">
      <div className="bg-white h-[130px] flex justify-center items-center">
        <GrDocumentText className="text-white text-[50px]" />
        {/* <img
          src={require("../../../../assets/images/logo.png")}
          className="h-[100px] w-[200px] object-contain"
        /> */}
      </div>
      <form action={item.url} method="get">
        <button
          className="py-3 px-3 bg-primary cursor-pointer w-full"
          type="submit"
        >
          <BsDownload className="text-white text-2xl mx-auto" />
        </button>
      </form>
    </div>
  );
};

export default ImagePreview;
