import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <button>
              <Link to="/orderHistory">🛍️ Order History</Link>
            </button>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <button>
              <a href="/" onClick={() => Auth.logout()}>
                🚪 Logout
              </a>
            </button>
          </li>
          <button className="dark-mode-btn" onClick={() => myFunction()}>
            🌙 Toggle Dark Mode
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <button>
              <Link to="/signup">✍️ Signup</Link>
            </button>
          </li>
          <li className="mx-1">
            <button>
              <Link to="/login">🗝️ Login</Link>
            </button>
          </li>
        </ul>
      );
    }
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="tech man">
            👨‍💻
          </span>
          -Tech-Finder
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
