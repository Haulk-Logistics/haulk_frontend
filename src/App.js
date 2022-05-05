import "./App.css";
import React from "react";
import AppRoutes from "./Routes/appRoutes";
import MessageModal from "./Components/Modal/MessageModal";
import PageLoader from "./Components/Spinner/PageLoader";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const loading = useSelector((state) => state.modalStatus.loading)
  return (
    <div className="App">
      <MessageModal />
      {loading && <PageLoader />}
      <AppRoutes />
      <ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
    </div>
  );
}

export default App;
