import React, {useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {

  const [usernameInput, setUsernameInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const navigate = useNavigate();

  const signUpEvent = e => {
    e.preventDefault();
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will display an error message
    // If the user is not registered, we will register the user and redirect to the home page


    const user = {username: usernameInput, password: passwordInput, name:nameInput, email:emailInput};

    axios.post("http://localhost:8080/newUser/", {
      username: usernameInput,
      password: passwordInput,
      name: nameInput,
      email: emailInput
    })
    .then(response => {
        alert("User has been created correctly, you are logged in now.");
        props.setUserLogged(user);
        navigate("/");
    })
    .catch(error => {
      if(error.response.status === 400){
        alert("The username is already in use, please pick a new one.");
      }else{
        alert("There was a problem when creating the new user.");
        window.location.reload(false);
      }
    })

    
  }

  useEffect(() => {
		if(props.userLogged){
			navigate("/");
		}
	},[]);

  return (
    <div className="card w-25">

      <form onSubmit={signUpEvent}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setUsernameInput(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setNameInput(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => setEmailInput(event.target.value)}
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

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary mb-2"
          >
            Sign Up
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered? <a href="/login">Log in here!</a>
        </p>
      </form>

    </div>
  );
}
