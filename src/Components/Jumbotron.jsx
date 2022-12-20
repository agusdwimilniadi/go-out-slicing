import React from "react";
import imageJumbotron from "../Images/picture-jumbotron.png";
import iconLocation from "../Images/location.png";
import iconDate from "../Images/date.png";
import iconClass from "../Images/class.png";

import pinLocation from "../Images/pin-location.png";

export default function Jumbotron() {
  return (
    <>
      <section id="jumbotron">
        <div className="container">
          <div className="row bg-row p-4 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 className="text-header">
                Find The Best Place to Stress Release
              </h1>
              <p className="text-subheader">
                A new way to travel by air the easy and fast way. <br /> Try it
                now by filling out the form below!
              </p>
            </div>
            <div className="col-md-6">
              <img src={imageJumbotron} alt="" className="img-fluid" />
            </div>
            <div className="col-md-12">
              <div className="navtabs-booking">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link first active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Flight
                    </button>
                    <button
                      className="nav-link second"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Hotel
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex={0}
                  >
                    <div className="row p-3 bg-white d-flex align-items-center">
                      <div className="col-md-3">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <img
                              src={iconLocation}
                              alt="location"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="NTB Lombok"
                            />
                          </div>
                          <div className="col-2">
                            <img
                              src={pinLocation}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <img
                              src={iconDate}
                              alt="location"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <input
                              type="date"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                          <div className="col-2">
                            <img
                              src={pinLocation}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <img
                              src={iconClass}
                              alt="location"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Economy"
                            />
                          </div>
                          <div className="col-2">
                            <img
                              src={pinLocation}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="d-grid">
                          <button className="btn btn-primary py-2 fw-bold">
                            <i className="fa fa-search"></i> Flight
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex={0}
                  >
                    <div className="row p-3 bg-white d-flex align-items-center">
                      <div className="col-md-5">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <img
                              src={iconLocation}
                              alt="location"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="NTB Lombok"
                            />
                          </div>
                          <div className="col-2">
                            <img
                              src={pinLocation}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row d-flex align-items-center">
                          <div className="col-2">
                            <img
                              src={iconDate}
                              alt="location"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <input
                              type="date"
                              className="form-control"
                              id="exampleFormControlInput1"
                            />
                          </div>
                          <div className="col-2">
                            <img
                              src={pinLocation}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="d-grid">
                          <button className="btn btn-primary py-2 fw-bold">
                            <i className="fa fa-search"></i> Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
