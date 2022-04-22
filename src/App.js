import "./App.css";
import React from "react";
import AppRoutes from "./Routes/appRoutes";
import MessageModal from "./Components/Modal/MessageModal";

function App() {
  return (
    <div className="App">
      <MessageModal />
      <AppRoutes />
    </div>
  );
}

export default App;
