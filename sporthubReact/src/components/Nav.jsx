import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>SportHub</h1>

      <nav className="menu">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/about-us"}>AboutUs</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
