import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-primary bg-opacity-20 flex justify-center items-center">
      <div className="w-full h-full sm:w-[80%] sm:h-[80%] md:w-[60%] bg-white overflow-y-auto rounded-lg shadow-md py-10 px-4">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
