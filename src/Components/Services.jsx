import React from "react";
import ServicesComponents from "./ServicesComponents";

export default function Services() {
  const data = [
    {
      title: "Calculated Weather",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      title: "Best Place to Stay",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      title: "Best Experience Flight",
      desc: "A new way to travel by air the easy and fast way.",
    },
    {
      title: "Easy-To-Use",
      desc: "A new way to travel by air the easy and fast way.",
    },
  ];
  return (
    <>
      <section id="services">
        <div className="container bg-secondary bg-row">
          <div className="row px-4 align-items-center">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary">Our Services</h5>
              <h1 className="fw-bold">
                We Offer <br /> Best Service
              </h1>
            </div>
            <div className="col-md-8">
              <div className="row">
                {data.map((item) => {
                  return (
                    <ServicesComponents
                      key={item.title}
                      desc={item.desc}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
