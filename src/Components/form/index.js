import React from 'react'
import { InputDefault, InputwithIcon } from '../Input'


const Form = ([elements]) => {
    

  return (
     elements.map(({labelname,type,id,name,placeholder, disabled,value,message},index) => {
        if(type == 'password')(
             <InputwithIcon 
                    labelname={labelname}
                    type={type}
                    id={id}
                    name={name}
                    placeholder ={placeholder}
                    value={value}
                    disabled={disabled}
            />)
       else { 
           <InputDefault
           labelname={labelname}
           type={type}
           id={id}
           name={name}
           placeholder ={placeholder}
           value={value}
           disabled={disabled}
        /> }
     })
  )
}

export  {Form}