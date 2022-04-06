import React, { useState } from "react";
import Inputstyle from "./styles.module.css";
import { AiFillEyeInvisible , AiFillEye} from "react-icons/ai";
import { Tooltip } from "../tooltip";






//  plain input field  for email, or text
const InputDefault = ({ labelname, id, type, name, placeholder, value, disabled}) => {
    
    
  return (
    <div className={Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input type={type} id={id} name={name} required  placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

//  Input field  with eyeIcon suitable for password
const InputwithIcon = ({ labelname, type, id, name, placeholder ,value,disabled,message }) => {
        const [state,setState] = useState('')
      
  return (
    <div className={Inputstyle.default}>
      <label htmlFor={id} >
            {labelname}
       </label>
      <div>
      <input type={state ? state : type } id={id} value={value} name={name} required placeholder={placeholder} disabled={disabled}  />
      <button  className={Inputstyle.Icon} disabled={disabled}  onClick={ () => state == '' ? setState('text'): setState('')} > { state ? <AiFillEyeInvisible /> :  <AiFillEye />} </button>
      </div>
      <p> *password must be atleast 8 characters long</p>
    </div>
  );
};




export { InputDefault, InputwithIcon };
