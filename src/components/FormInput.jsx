import React from "react";

const FormInput = ({
  label,
  type = "text",
  placeholder = "",
  radioBorder = "",
  labelStyle = "text-[16px]",
  inputStyle = "border border-pink-300",
  register,
  name,
  validation,
  errorMessage,
  value,
}) => {
  return (
    <div className={radioBorder}>
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        className={inputStyle}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        value={value}
      />
      {errorMessage && <p className="text-red">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
