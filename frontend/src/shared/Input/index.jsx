import React from "react";
import { Field, useField } from "formik";
import { Input as AntInput } from "antd";
import "./input.css";

const Input = ({ name, label }) => {
  const [, { error, touched }] = useField(name);
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <Field name={name} as={AntInput} />
      {error && touched && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;
