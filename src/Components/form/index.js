import React from "react";
import { useState } from "react";
import { InputDefault, InputwithIcon } from "../Input";


const   Form = (props) => {

  const [formFields, setFormFields] = useState(props.element
  );

  // Change handler
  const handleInputChange = (e) => {
    const { value, id, name } = e.target;
    setFormFields((currentFormFields) =>
      currentFormFields.map((field) => {
        if (field.id === id) field.value = value;
        console.log(name);
        return field;
      })
    );
  };


  return (
    <div>
      <header >
        {formFields.map((input, idx) => {
            if (input.type  ===  'password'  ){
                return (
                    <InputwithIcon
                        key={`${input.name} ${idx}`}
                        {...input}
                        onChange={handleInputChange}
                    />);
            } else{
                return(
                    <InputDefault
                        key={`${input.name} ${idx}`}
                        {...input}
                        onChange={handleInputChange}
                    />
                )
            }
        })}
      </header>
    </div>
  );
}

export {Form};
