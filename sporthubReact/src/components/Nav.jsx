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
            <button className="button" id="menuBtn"><ion-icon name="person-circle-outline" id="icono"></ion-icon>{userLogged.username}</button>
              <div className="dropdown-content">
                <Link to={`/profile/${userLogged.username}`}>My Perfil</Link>
                <Link to="/pedidos/">Mis pedidos</Link>
                <a className="nav-link"
                  onClick={() => {
                    setUserLogged(null);
                    localStorage.removeItem("user");
                    history.push("/");
                  }}>Log out</a>
              </div>
          </div>
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
