import React, { useState } from "react";
import { InputDefault, InputwithIcon } from "../Input";

const Form = ({ element }) => {
  const [formFields, setFormFields] = useState(element);
  const [error, setError] = useState();

  // console.log(props.element)

  // Change handler
  const handleInputChange = (e) => {
    const { value, id } = e.target;
    setFormFields((currentFormFields) =>
      currentFormFields.map((field) => {
        if (field.id === id) {
          // console.log(value)
          field.value = value.trim();
        }
        // console.log(name);
        return field;
      })
    );
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    // console.log(e.target)
    validation();
  };

  //  validation

  const validation = () => {
    formFields.map((eachfield) => {
      // console.log(eachfield);
      const { type, name, value } = eachfield;
      if (type === "password" && value.length < 8) {
        setError(`${name} no fit run am like this`);
        console.log(error, "e dey work");
      }
      return error;
    });
  };

  // console.log(formFields)

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          {formFields.map((input, idx) => {
            if (input.type === "password") {
              return (
                <InputwithIcon
                  key={`${input.name} ${idx}`}
                  {...input}
                  onChange={handleInputChange}
                  required
                  error
                />
              );
            } else {
              return (
                <InputDefault
                  key={`${input.name} ${idx}`}
                  {...input}
                  onChange={handleInputChange}
                  required
                  error
                />
              );
            }
          })}
          <input type="submit" />
        </form>
      </header>
    </div>
  );
};

export { Form };
