import React, { useState } from "react";
import './form.css'
import Buttonscomponent from "./form_buttons";
// Import CSS file for styling
const Customform = () => {
  const [formData, setFormData] = useState({
    fields: [],
  });
 
  const handleAddField = (type) => {
    const newField = {
      type,
      label:
        type === "text"
          ? "Name"
          : type === "email"
          ? "Email"
          : type === "textarea"
          ? "Address"
          : type === "tel"
          ? "Contact"
          : type === "checkbox"
          ? "Agreement Policy"
          : type === "dropdown"
          ? "Qualification"
          : type === "radio"
          ? "Gender"
          : "",
      options: type === "dropdown" ? ["HSC", "UG", "PG", "Diploma"] : [],
    };
 
    setFormData({
      ...formData,
      fields: [...formData.fields, newField],
    });
  };
 
    const handleRemoveField = (index) => {
    const updatedFields = [...formData.fields];
    updatedFields.splice(index, 1);
    setFormData({
      ...formData,
      fields: updatedFields,
    });
  };
 
    const handleChange = (index, key, value) => {
    const updatedFields = [...formData.fields];
    updatedFields[index][key] = value;
    setFormData({
      ...formData,
      fields: updatedFields,
    });
  };
 
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted successfully!!", formData);
    const fieldnew = []
    setFormData({
      fields: fieldnew
    })
    alert("Form submitted successfully!!")
  };
 
    const handleSaveConfig = () => {
    const jsonConfig = JSON.stringify(formData);
    localStorage.setItem('formConfig', jsonConfig);
    alert('Form configuration saved successfully!');
};
    const handleLoadConfig = () => {
    const jsonConfig = localStorage.getItem('formConfig');
    if (jsonConfig) {
        const loadedConfig = JSON.parse(jsonConfig);
        setFormData(loadedConfig);
        console.log(loadedConfig);
        alert('Form configuration loaded successfully!');
    } else {
        alert('No saved configuration found.');
    }
};
 
  return (
    <div className="custom-form d-flex justify-content-center">
      <Buttonscomponent handleAddField={handleAddField} handleRemoveField={handleRemoveField} handleChange={handleChange} handleSubmit={handleSubmit}
      handleSaveConfig={handleSaveConfig} handleLoadConfig={handleLoadConfig} formData={formData}/>
    </div>
  );
};
export default Customform;