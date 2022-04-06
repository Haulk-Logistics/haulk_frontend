import "./App.css";
import Modal from "./Utils/Modal/Modal";
import { useState } from "react";
import {InputDefault, InputwithIcon } from "./Components/Input";
import { Form } from "./Components/form";

function App() {
  const [modalDisplay, setModalDisplay] = useState(true);

  const closeModal = () => {
    setModalDisplay(false);
  };

  return (
    <div className="App">
      {modalDisplay && <Modal closeModal={closeModal} />}

  
      <Form element={ [{
        labelname:'First name',
        type: "text",
        name: "Firstname",
        id: "fname",
        value:'',
        placeholder: "Enter  Firstname",
        errorText: "",
       
      },
      {
        labelname:'Last name',
        type: "text",
        name: "Lastname",
        id: "lname",
        value:'',
        placeholder: "Enter Lastname",
   
      },
      {
        labelname:'Email',
        type: "email",
        name: "Email",
        id: "email",
        value:'',
        placeholder: "chidera@gmail.com",
      
      },

      {
        labelname:'Password',
        type: "password",
        name: "Password",
        id: "password",
        value:'',
        placeholder: "password",
       
      },
      
    
    ]}/>
    </div>
  );
}

export default App;
