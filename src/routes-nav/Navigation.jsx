import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/userContext";
import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 * 
 * When user is logged in, shows links to main areas of site. When not, 
 * shows link to Login and Signup forms.
 * 
 * Rendered by App.
 */

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  function loggedInNav() {
    return (
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/league">
              Leagues
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/cup">
              Cups
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/teams">
              Teams
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.username}
            </NavLink>
          </li>
        </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ml-auto justify-content-end">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar sticky-top navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Footy
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {currentUser ? loggedInNav() : loggedOutNav()}

        </div>
      </div>
    </nav>
  );
}

export default Navigation;