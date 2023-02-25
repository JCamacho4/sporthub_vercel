import React from "react";

export default function Login(props) {

  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  const loginEvent = () => {
    // Here we will send the username and password to the backend
    // and check if the user is registered
    // If the user is registered, we will redirect to the home page
    // If the user is not registered, we will display an error message

    const user = {username: usernameInput, email: "takeFromDatabase"};
    alert("hola buenas " + user.username + " " + user.email);
    props.setUserLogged(user);

    /* No se refleja el cambio en las demas páginas (app y nav)*/
  }


  return (
    <div className="card w-25">

      <form onSubmit={() => loginEvent()}>
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

        <p className="forgot-password text-right">
          Not registered already? <a href="/signup">Register here!</a>
        </p>

      </form>

    </div>
  );
}
