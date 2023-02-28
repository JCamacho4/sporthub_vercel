import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import React from "react";

function App() {

  const [userLogged, setUserLogged] = React.useState({username: "", email:""});


  return (
    <div>
      <button 
        onClick={()=>alert(userLogged.username)}>
      </button>


      <BrowserRouter>
        <Nav username={userLogged.username}></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
