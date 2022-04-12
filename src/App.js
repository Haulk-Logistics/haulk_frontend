import './App.css';
import React, { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<LandingPage/>} exact/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
