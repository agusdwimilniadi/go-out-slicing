import React from "react";
import iconService1 from "../Images/icon-services-1.png";

export default function ServicesComponents(props) {
  console.log("INI ISI PROPS ", props);
  return (
    <>
      <div className="col-md-6 mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={iconService1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-9">
            <h4 className="fw-bold">{props.title}</h4>
            <p className="text-subheader">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
