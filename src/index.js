import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConfigureStore from './Store/configureStore';
import { Provider } from 'react-redux';
import App from './App';
import UserDashboard from './Components/UserDashboard/UserDashboard';

const store = ConfigureStore();

const haulk = (
	<Provider store={store}>
		{/* <App /> */}
		<UserDashboard />
	</Provider>
);

ReactDOM.render(haulk, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
