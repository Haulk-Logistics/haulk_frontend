import './App.css';
import Modal from './Utils/Modal/Modal';
import { useState } from 'react';
import Button from './Components/buttons/Button';
import Card from './Components/cards/Card';

function App() {
	const [modalDisplay, setModalDisplay] = useState(true);

	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<div className='App'>
			{modalDisplay && <Modal closeModal={closeModal} />}

			<Button />
			<Card />
		</div>
	);
}

export default App;
