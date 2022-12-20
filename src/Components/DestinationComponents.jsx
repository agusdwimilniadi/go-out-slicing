import React from "react";
import destinationImage from "../Images/destination=images.png";

export default function DestinationComponents(props) {
  return (
    <>
      <div className="col-md-3 mt-3">
        <div className="card-destination position-relative">
          <div className="img-thumbnails">
            <img
              src={destinationImage}
              alt="destination"
              className="img-fluid"
              style={{ width: "100%" }}
            />
          </div>
          <div className="description-thumbnails p-3 position-relative mt-3">
            <h5 className="fw-bold">{props.title}</h5>
            <p className="text-subheader">
              <i className="fa fa-location-arrow"></i> {props.location}
            </p>
            <p className="fw-bold">
              ${props.price}{" "}
              <span className="text-subheader fw-normal">/person</span>
            </p>
            <button className="btn px-4 btn-primary-destination position-absolute">
              Book
            </button>
          </div>
          <span className="rating p-2 text-white fw-bold position-absolute">
            <i className="fa fa-star text-warning"></i> {props.rating}
          </span>
        </div>
      </div>
    </>
  );
}
