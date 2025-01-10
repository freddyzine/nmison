import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const PasswordTextInput = ({
  value,
  setValue,
  placeholder,
  className,
  contClassName,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`w-full flex items-center border border-slate-400 border-solid ${contClassName}`}
    >
      <input
        className={`w-[95%] py-3 px-3 font-roboto ${className}`}
        placeholder={placeholder}
        value={value}
        type={visible ? "text" : "password"}
        onChange={setValue}
      />
      {visible ? (
        <AiOutlineEyeInvisible
          className="text-xl text-slate-500 cursor-pointer"
          onClick={() => setVisible(!visible)}
        />
      ) : (
        <AiOutlineEye
          className="text-xl text-slate-500 cursor-pointer"
          onClick={() => setVisible(!visible)}
        />
      )}
    </div>
  );
};

export default PasswordTextInput;
