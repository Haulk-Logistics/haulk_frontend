import './App.css';
import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ResourcesPage from "./Pages/ResourcesPage";
import ErrorPage from "./Pages/ErrorPage";
import BookPage from "./Pages/BookPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<LandingPage/>} exact />
          <Route path = "resources" element = {<ResourcesPage/>}/>
          <Route path = "" element = {<ErrorPage/>}/>
          <Route path = "/book-truck" element = {<BookPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
