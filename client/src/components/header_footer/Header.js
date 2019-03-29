import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    // <!-- style="background-color: #e3f2fd;" -->
  <nav className="navbar navbar-expand-md navbar-dark fixed-top  bg-dark " >
    <div class="container">
        <a href="/" className="navbar-brand ">
          <span width="50" height="50"><h3 className="d-inline align-middle brand text-white" style={{letterSpacing: "3px;"}}> FunSenSei </h3></span>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item text-white">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> About
                </Link>
              </li>
            </ul>
        </div>
    </div>
  </nav>
   
  );
}

export default Header;
