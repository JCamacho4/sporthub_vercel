import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
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
