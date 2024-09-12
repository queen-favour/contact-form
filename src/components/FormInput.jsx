import React from "react";

const FormInput = ({
  label,
  type = "text",
  placeholder = "placeholder",
  radioBorder = "",
  labelStyle = " text-[16px]",
  inputStyle = "border border-pink-300",
}) => {
  return (
    <div className={radioBorder}>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input className={inputStyle} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
