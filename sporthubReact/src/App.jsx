import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import React from "react";
import './assets/styles/style.css'

function App() {

  const [userLogged, setUserLogged] = React.useState({username: "", email:""});


  return (
    <div>
      <BrowserRouter>
        <Nav username={userLogged.username}></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login userLogged={userLogged} setUserLogged={setUserLogged} />}></Route>
          <Route path="/signup" element={<SignUp userLogged={userLogged} setUserLogged={setUserLogged} />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
