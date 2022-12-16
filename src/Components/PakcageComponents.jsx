import React from "react";
import ImageBali from "../Images/bali-id.png";

export default function PakcageComponents() {
  return (
    <>
      <div className="col-md-6">
        <div className="components-images position-relative text-center p-2">
          <img src={ImageBali} alt="" className="img-fluid" />
          <div
            className="position-absolute star-position text-start
                    "
          >
            <span>
              <i class="fa fa-star text-warning"></i>
            </span>
            <span>
              <i class="fa fa-star text-warning"></i>
            </span>
            <span>
              <i class="fa fa-star text-warning"></i>
            </span>
            <span>
              <i class="fa fa-star text-warning"></i>
            </span>
            <span>
              <i class="fa fa-star text-warning"></i>
            </span>
            <p className="fw-bold text-white m-0">Greates Tower</p>
            <p className="text-white">
              <i class="fa fa-map-marker"></i> Bali, Indonesia
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
