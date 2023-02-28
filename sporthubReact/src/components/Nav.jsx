import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

export default function Nav(props) {

  useEffect(() => {
    console.log(props.username);
  }, [props.username]);

  const loginAndRegister = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"/signup"}>Sign up</Link>
        </li>
      </>
    );
  }

  const helloUserAndLogout = () => {
    return (
      <>

        <li className="nav-item">
          <div class="card">
            <div class="card-body p-1">
              <h5 class="card-title mb-0">Hello {props.username}</h5>
              <p class="card-text small-user-card-text">we can put here inbox/notifications/logout</p>
            </div>
          </div>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to={"/logout"}>Log out</Link>
        </li>
      </>
    );
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg p-0 mb-2">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img
              width="200"
              alt="Logo"
              src="https://user-images.githubusercontent.com/100539990/221368717-a32486ad-8628-4658-8354-b97b5eaa3a43.png"
            />
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">

            <ul className="navbar-nav">

              {/* I don`t know how, but we might consider the navbar component being able to know the page which is located and add 'className="nav-link active" aria-current="page"'*/}

              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>About Us</Link>
              </li>

            </ul>

            <ul className="navbar-nav ms-auto d-flex">

              {
                props.username ? helloUserAndLogout() : loginAndRegister()
                /* IDK if function must be called () => loginAndRegister(), in that case, there is an error */
              }
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
