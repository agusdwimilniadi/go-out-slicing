import React from "react";
import logoTop from "../Images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar-1-1 navbar navbar-expand-lg navbar-light p-4 px-md-4 mb-3 bg-body"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoTop} alt="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link px-md-4 active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">
                  Flight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">
                  Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">
                  Travel Package
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a
                className="btn btn-get-started btn-get-started-blue text-white"
                href="#"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
