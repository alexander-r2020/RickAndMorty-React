import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark mb-3" >
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="#">
          Rick And Morty
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation
          text-white"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">         
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
