import React from "react";
import bgVector from "../Images/Vector.png";
import profilePic from "../Images/profil.png";

export default function Discount() {
  return (
    <>
      <section id="discount" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="bg-discount text-center d-flex align-items-center justify-content-center position-relative"
                style={{ backgroundImage: `url(${bgVector})` }}
              >
                <span className="love shadow">
                  <i class="fa fa-heart fs-1" style={{ color: "#FF6363" }}></i>
                </span>
                <div className=" content-discount">
                  <div>
                    <h6 className="text-primary fw-bold">New User</h6>
                    <h3 className="fw-bold">
                      Dont Miss The 50% <br /> Discount If You Register Today
                    </h3>
                    <p className="fs-6">
                      Let's maximize your next holiday with us <br /> with the
                      best experience.
                    </p>
                    <button className="btn btn-primary  py-2 px-3">
                      Register Account
                    </button>
                  </div>
                </div>
                <div className="box-thankyou shadow position-absolute text-start">
                  <i class="fa fa-star" style={{ color: "#FF7A00" }}></i>
                  <i class="fa fa-star" style={{ color: "#FF7A00" }}></i>
                  <i class="fa fa-star" style={{ color: "#FF7A00" }}></i>
                  <i class="fa fa-star" style={{ color: "#FF7A00" }}></i>
                  <i class="fa fa-star" style={{ color: "#FF7A00" }}></i>
                  <p className="">
                    Thank you for helping <br /> my vacation. Amazing!
                  </p>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={profilePic}
                        alt=""
                        style={{ width: "90px" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <span>
                        <span className="fw-bold">Sova Nerds</span>
                        <br />
                        Backpacker
                      </span>
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
