import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css"
// import axios from "axios";

export default function Login({ userLogged, setUserLogged }) {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const navigate = useNavigate();

  const loginEvent = (e) => {
    e.preventDefault();
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will redirect to the home page
    // If the user is not registered, we will display an error message

    axios
      .post("http://localhost:8080/login/", {
        username: usernameInput,
        password: passwordInput,
      })
      .then((response) => {
        const user = { username: usernameInput };
        setUserLogged(user);
        localStorage.setItem("user", response.data);
        navigate("/");
      })
      .catch((error) => {
        alert("The username or password were incorrect.");
      });
  };

  useEffect(() => {
    if (userLogged) {
      navigate("/");
    }
  }, []);

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={loginEvent}>
            <h2>Login</h2>
            <div className="inputbox">
            <ion-icon name="person-outline"></ion-icon>
              <input id="username"
                type="username"
                className="form-control"
                onChange={(event) => setUsernameInput(event.target.value)}
              />
              <label>Username</label>
            </div>  
              
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input id="password"
                type="password"
                className="form-control"
                onChange={(event) => setPasswordInput(event.target.value)}
              />
              <label>Password</label>
            </div>
            <button id="button"
              type="login" 
              className="btn btn-primary mb-2"
            >
              Log in
            </button>
            <div className="register">
              <label for="">Not registered already? <a href="/signup">Register here</a></label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
