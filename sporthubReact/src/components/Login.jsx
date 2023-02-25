import React from "react";

export default function Login() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function loginEvent(event) {
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will redirect to the home page
    // If the user is not registered, we will display an error message

    alert("Username: " + username + " Password: " + password);
  }


  return (
    <div className="card w-25">

      <form onSubmit={loginEvent}>
        <h3>Log in</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            onChange={(event) => setUsername(event.target.value)}
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

        <div>
          <button
            type="login" 
            className="btn btn-primary mb-2"
          >
            Log in
          </button>
        </div>

        <p className="forgot-password text-right">
          Not registered already? <a href="/signup">Register here!</a>
        </p>

      </form>

    </div>
  );
}
