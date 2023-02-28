import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import React, { useEffect } from "react";
import './assets/styles/style.css'

function App() {

  const [userLogged, setUserLogged] = React.useState(JSON.parse(localStorage.getItem("user")));

	useEffect(() => {
		if(userLogged && userLogged.username){
			localStorage.setItem("user",JSON.stringify(userLogged));
		}else{
			localStorage.removeItem("user");
		}
	},[userLogged]);

  return (
    <div>
      <BrowserRouter>
        <Nav userLogged={userLogged} setUserLogged={setUserLogged}></Nav>
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
