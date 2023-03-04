import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function Login(props) {

  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
	const navigate = useNavigate();

  const loginEvent = (e) => {
    e.preventDefault();
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will redirect to the home page
    // If the user is not registered, we will display an error message

    const user = {username: usernameInput, password: passwordInput};

    axios.post("http://localhost:8080/login/", {
      username: user.username,
      password: user.password
    })
    .then(response => {
      props.setUserLogged(user);
      navigate("/");
    })
    .catch(error => {
      alert("The username or password were incorrect.");
      window.location.reload(false);
    })

  }

	useEffect(() => {
		if(props.userLogged){
			navigate("/");
		}
	},[]);


  return (
    <body>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={loginEvent}>
              <h2>Login</h2>
              <div class="inputbox">
              <ion-icon name="person-outline"></ion-icon>
                <input
                  type="username"
                  className="form-control"
                  onChange={(event) => setUsernameInput(event.target.value)}
                />
                <label>Username</label>
              </div>  
              
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
                <label>Password</label>
              </div>
              <button id="login"
                type="login" 
                className="btn btn-primary mb-2"
              >
                Log in
              </button>
              <div class="register">
                <label for="">Not registered already? <a href="/signup">Register here</a></label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </body>










    /*
    <div className="card w-25">

      <form onSubmit={loginEvent}>
        <h3>Log in</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            onChange={(event) => setUsernameInput(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) => setPasswordInput(event.target.value)}
          />
        </div>

        <div>
          <button
            type="login" 
            className="btn btn-primary mb-2"
          >
            Log in
          </button>
        </div>

        

      </form>

    </div>*/
  );
}
