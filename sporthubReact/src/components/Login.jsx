import React from "react";

export default function Login() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }


  return (
    <div className="card w-25">

      <form>
        <h3>Log in</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChangeUsername}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
          />
        </div>

        <div>
          <button type="login" className="btn btn-primary mb-2">
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
