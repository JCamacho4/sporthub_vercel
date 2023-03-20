import { Link } from "react-router-dom";
import React from "react";
import "../assets/styles/navBar.css";

export default function Nav({ userLogged, setUserLogged }) {
  const loginAndRegister = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>
            <button className="button2">Login</button>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"/signup"}>
            <button className="button2">Sign Up</button>
          </Link>
        </li>


      </>
    );
  };

  const helloUserAndLogout = () => {
    return (
      <>
        <li className="nav-item">
          <div className="dropdown">
            <button type="button" className="button" id="menuBtn" data-bs-toggle="dropdown">
              <ion-icon name="person-circle-outline" id="icono"></ion-icon>{userLogged.username}
            </button>
            <ul className="dropdown-menu">
              <li> <a className="dropdown-item" href={`/profile/${userLogged.username}`}>Profile</a> </li>
              <li> <a className="dropdown-item" href="/wish-list/">Wish list</a> </li>
              <li> <a className="dropdown-item" href="#"
                onClick={() => {
                  setUserLogged(null);
                  localStorage.removeItem("user");
                  history.push("/");
                }}>Log out</a>
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg p-0 mb-2 z-3">
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

              <li className="nav-item">
                <Link className="nav-link" to={"/categories"}>
                  Categories
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
