import React from "react";

export default function SignUp() {

  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function signUpEvent(event) {
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will display an error message
    // If the user is not registered, we will register the user and redirect to the home page

    alert("Username: " + username + " Name: " + name + " Email: " + email + " Password: " + password);
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
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) => setPassword(event.target.value)}
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
