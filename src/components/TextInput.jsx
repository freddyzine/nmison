import React from "react";

const TextInput = ({
  value,
  setValue,
  placeholder,
  type = "text",
  className,
}) => {
  return (
    <input
      className={`w-full py-3 px-3 font-roboto border border-slate-400 border-solid ${className}`}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={setValue}
    />
  );
};

export default TextInput;
