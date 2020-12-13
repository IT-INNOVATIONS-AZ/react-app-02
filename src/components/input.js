import React from "react";

const FormPage = ({ label, name, type, onChange }) => {
  return (
    <div>
      <label className="grey-text">{label}</label>
      <input
        name={name}
        type={type}
        className="form-control"
        onChange={onChange}
      />
    </div>
  );
};

export default FormPage;
