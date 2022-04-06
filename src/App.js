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

      <Form
      element = {[
        {
        id:"name" ,
        labelname:'Icon Field label' ,
        placeholder:'Value ' 
        },
        {
        id:"name" ,
        labelname:'Icon Field label' ,
        placeholder:'Value ' 
        },
        {
          type:'password' ,
        id:"name" ,
        labelname:'Icon Field label' ,
        placeholder:'Value ' 
        },
        {
          type:'email' ,
        id:"name" ,
        labelname:'Icon Field label' ,
        placeholder:'Value ' 
        },

      ]}
      />

      <InputwithIcon 
      type='password' 
      id="name" 
      labelname='Icon Field label' 
      placeholder='Value ' 
      message='This is my first toolp message' 
      />

    </div>
  );
}

export default App;
