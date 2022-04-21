import "./App.css";
import React from "react";
import AppRoutes from "./Routes/appRoutes";
import PageRoutes from "./Components/UserDashboard/DashboardRoutes/PageRoutes";

function App() {
  return (
    <div className="App">
      {/* <AppRoutes /> */}
      <PageRoutes />
    </div>
  );
}

export default App;
