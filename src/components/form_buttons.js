import React from 'react';

export default function Buttonscomponent({ handleAddField, handleChange, handleLoadConfig, handleRemoveField, handleSaveConfig, handleSubmit, formData }) {
return (
<div>
    <form onSubmit={handleSubmit}>
        {formData.fields.map((field, index) => (
            <div className="form-group" key={index}>
                <label>{field.label}</label>

                {field.type === "text" && (
                    <input
                        type="text"
                        value={field.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        placeholder="Enter Name"
                        required
                    />
                )}

                {field.type === "email" && (
                    <input
                        type="text"
                        value={field.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        placeholder="Enter Email"
                        required
                    />
                )}

                {field.type === "tel" && (
                    <input
                        type="tel"
                        value={field.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        placeholder="Enter Contact No."
                        pattern="[0-9]{10}"
                        required
                    />
                )}

                {field.type === 'textarea' && (
                    <textarea
                        value={field.value}
                        onChange={(e) => handleChange(index, 'value', e.target.value)}
                        placeholder="Enter Address"
                        required
                    ></textarea>)}

                {field.type === "checkbox" && (
                    <label>
                        <input
                            type="checkbox"
                            checked={field.label}
                            onChange={(e) =>
                                handleChange(index, "label", e.target.checked)
                            }
                            required
                        />
                        I agree to the policy
                    </label>
                )}

                {field.type === "dropdown" && (
                    <select
                        value={field.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        {field.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}

                {field.type === "radio" && (
                    <>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={field.label === "male"}
                                onChange={(e) =>
                                    handleChange(index, "label", e.target.value)
                                }
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={field.label === "female"}
                                onChange={(e) =>
                                    handleChange(index, "label", e.target.value)
                                }
                                required
                            />
                            Female
                        </label>
                    </>
                )}

                <button type="button" onClick={() => handleRemoveField(index)}>
                    Remove
                </button>
            </div>
        ))}
        <div className="form-actions">
            <button className="btn btn-dark mx-2 my-2 border border-light animate-button" type="button" onClick={() => handleAddField("text")}>
                Add Name
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={() => handleAddField("email")}>
                Add E-mail
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={() => handleAddField("tel")}>
                Add Contact
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={() => handleAddField("textarea")}>
                Add Address
            </button>
            <button type="button" className="btn btn-dark my-2 mx-2 border border-light animate-button" onClick={() => handleAddField("checkbox")}>
                Add Policy
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={() => handleAddField("dropdown")}>
                Add Qualifications
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={() => handleAddField("radio")}>
                Add Gender
            </button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={handleSaveConfig}>Save Configuration</button>
            <button type="button" className="btn btn-dark mx-2 my-2 border border-light animate-button" onClick={handleLoadConfig}>Load Configuration</button>
        </div>
        <button className=" btn btn-light mx-2 my-2 border border-secondary animate-button" type="submit">Submit</button>
    </form>
</div>
)
}