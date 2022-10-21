import React from "react";
import { ErrorMessage, useField } from "formik";

const InputRegister = ({ lable, ...props }) => {
  const [filed, meta] = useField(props);

  return (
    <>
      <label htmlFor={filed.name}>{lable}</label>
      <input
        className={`ant-form-item-control    ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...filed}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage component='div' name={filed.name} className='error'  />
    </>
  );
};

export default InputRegister;
