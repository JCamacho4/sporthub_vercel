import React from "react";

export default function SignUp() {

  const [usernameInput, setUsernameInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  function signUpEvent(event) {
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will display an error message
    // If the user is not registered, we will register the user and redirect to the home page

    alert("Username: " + usernameInput + " Name: " + nameInput + " Email: " + emailInput + " Password: " + passwordInput);
  }

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
