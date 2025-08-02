import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function CustomInput({ name, type, placeholder, icon, setFormData, value }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="custom-input">
      <span className="input-icon">{icon}</span>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {placeholder == "Password" && (
        <span className="input-icon">
          <MdOutlineRemoveRedEye color="#737373" size={20} />
        </span>
      )}
    </div>
  );
}

export default CustomInput;
