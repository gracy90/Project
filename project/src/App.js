import React from "react";
import Welcome from "./pages/welcome";
import NavBar from "./components/navBar";
import {BrowserRouter , Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ViewReport from "./pages/viewReport";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import './index.css';


function App() {
  return (
    <><BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/request" element={<PrivateRoute />}> */}
          <Route path="/about" element={<About/>} />
        {/* </Route> */}
        {/* <Route path="/donate" element={<PrivateRoute />}> */}
          <Route path="/viewReport" element={<ViewReport/>} />
        {/* </Route> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
