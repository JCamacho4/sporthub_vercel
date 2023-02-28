import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Nav() {

	const [user,setUser] = useState(null);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	},[]);


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

	const logoutEvent = () => {
		localStorage.removeItem("user")
		setUser(null);
	}

	const helloAndLogout = () => {
		return (
			<>
				<li className="nav-item">
					Hola @{user.username} buenas
				</li>

				<li className="nav-item">
					<Link className="nav-link" onClick={() => logoutEvent()} to={"/"}>Logout</Link>
				</li>
			</>
		)
	}

  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 mb-3">
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

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* I don`t know how, but we might consider the navbar component being able to know the page which is located and add 'className="nav-link active" aria-current="page"'*/}

              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>About Us</Link>
              </li>

              {
                user ? (helloAndLogout()) : (loginAndRegister())
                /* IDK if function must be called () => loginAndRegister(), in that case, there is an error */
              }


            </ul>

            <button onClick={() => alert(JSON.stringify(user))}>

            </button>

          </div>
        </div>
      </nav>
    </div>
  );
}
