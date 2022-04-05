import './App.css';
import Modal from './Utils/Modal/Modal';
import { useState } from 'react';

function App() {
  const [modalDisplay, setModalDisplay] = useState(true);

  const closeModal = () => {
    setModalDisplay(false)
  }

  return (
    <div className="App">
      {modalDisplay && <Modal closeModal = {closeModal}/>}
    </div>
  );
}

export default App;
