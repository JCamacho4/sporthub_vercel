import { Link } from "react-router-dom";
import React from "react";

export default function Nav({ userLogged, setUserLogged }) {
  const loginAndRegister = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>
            <button className="container rounded-pill bg-warning border-0">Login</button>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"/signup"}>
            <button className="container rounded-pill bg-warning border-0">Sign Up</button>
          </Link>
        </li>
      </>
    );
  };

  const helloUserAndLogout = () => {
    return (
      <>
        <li className="nav-item">
          <div className="card">
            <div className="card-body p-1">
              <h5 className="card-title mb-0">Hello {userLogged.username}</h5>
              <p className="card-text small-user-card-text">
                we can put here inbox/notifications/logout
              </p>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => {
              setUserLogged(null);
              localStorage.removeItem("user");
            }}
            href="/"
          >
            Log out
          </a>
        </li>
      </>
    );
  };

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

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              {/* I don`t know how, but we might consider the navbar component being able to know the page which is located and add 'className="nav-link active" aria-current="page"'*/}

              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>
                  About Us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex">
              {
                userLogged ? helloUserAndLogout() : loginAndRegister()
                /* IDK if function must be called () => loginAndRegister(), in that case, there is an error */
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
