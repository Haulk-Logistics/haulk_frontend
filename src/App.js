import "./App.css";
import React, { useEffect} from "react";
import AppRoutes from "./Routes/appRoutes";
import MessageModal from "./Components/Modal/MessageModal";
import PageLoader from "./Components/Spinner/PageLoader";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.modalStatus.loading)
  return (
    <div className="App">
      <MessageModal />
      {loading && <PageLoader />}
      <AppRoutes />

    </div>
  );
}

export default App;
