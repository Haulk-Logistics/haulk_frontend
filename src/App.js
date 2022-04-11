<<<<<<< HEAD

=======
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
>>>>>>> 1796ac7368784a93c180d230c251643d9867231b
