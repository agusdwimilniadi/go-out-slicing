import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ backgroundColor: "pink", width: "20%" }}>
        <h1>{props.judul}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          facere voluptatibus quidem.
        </p>
      </div>
    </>
  );
};

export default Card;
