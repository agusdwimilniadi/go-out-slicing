import React from "react";
import logo from "../Images/go-out-white.png";
import logoFooter from "../Images/logo-footer.png";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2 text-white">
              <img src={logo} alt="" className="img-fluid" />
              <p>
                Copyright © 2022. <br /> All Rights Reserved.
              </p>
            </div>
            <div className="col-md-2 text-white">
              <p className="fw-bold">Page Menu</p>
              <p>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-subheader text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  About Us
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  My Account
                </a>
              </p>
            </div>
            <div className="col-md-2 text-white">
              <p className="fw-bold">Our Product</p>
              <p>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-subheader text-decoration-none">
                  Booking Flight
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Booking Hotels
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Trip Package
                </a>
              </p>
            </div>
            <div className="col-md-2 text-white">
              <p className="fw-bold">Social Media</p>
              <p>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-subheader text-decoration-none">
                  Twitter
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Tiktok
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="text-subheader text-decoration-none">
                  Instagram
                </a>
              </p>
            </div>
            <div className="col-md-4 text-end">
              <img src={logoFooter} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
