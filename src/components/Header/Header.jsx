import React from "react";
import logo from '../../assets/images/site_logo.png'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="site logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  API
                </a>
              </li>
            </ul>
            <div className="btns d-lg-block d-flex justify-content-around">
              <Link to="login" className="btn text-white fw-6 fs-12">
                Sign in
              </Link>
              <Link to="dashboard" className="btn btn-primary border-0 fw-5 fs-13">
                Launch Apps
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
