import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import React, { useState, useEffect } from "react";
import "./assets/styles/style.css";
import axios from "axios";

function App() {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .post("http://localhost:8080/userByToken", {
          token: localStorage.getItem("user"),
        })
        .then((response) => {
          if (response.status === 200) {
            setUserLogged(response.data);
          }
        })
        .catch((error) => { });
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Nav userLogged={userLogged} setUserLogged={setUserLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/login"
            element={
              <Login userLogged={userLogged} setUserLogged={setUserLogged} />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignUp userLogged={userLogged} setUserLogged={setUserLogged} />
            }
          >
            {" "}
          </Route>
          <Route
            path="/profile/:username"
            element={<Profile userLogged={userLogged} setUserLogged={setUserLogged} />} />

          <Route
            path="/categories/:category"
            element={<Profile userLogged={userLogged} setUserLogged={setUserLogged} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
