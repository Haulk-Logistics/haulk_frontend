import "./App.css";
import React, { useEffect} from "react";
import AppRoutes from "./Routes/appRoutes";
import MessageModal from "./Components/Modal/MessageModal";
import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <MessageModal />
      <AppRoutes />
    </div>
  );
}

export default App;
