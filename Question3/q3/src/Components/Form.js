import React, { useState } from 'react'

const Form = () => {
    const [fields, setFields] = useState([{ name: "", phone: "" }]);


    const handleAddField = () => {
        const newFields = [...fields];
        if (newFields.length < 10) {
            newFields.push({ name: "", phone: "" });
            setFields(newFields);
        } else {
            alert("You can't add more than 10 fields!");
        }
    };


    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    const handleInputChange = (index, event) => {
        const newFields = [...fields];
        newFields[index][event.target.name] = event.target.value;
        setFields(newFields);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fields);
    };

    return (
        <div>
            <h1>Dynamic Input Fields</h1>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={field.name}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            value={field.phone}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                        <button type="button" onClick={() => handleRemoveField(index)}>
                            -
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddField}>
                    Add Field
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Form;