import React from "react";
import DestinationComponents from "./DestinationComponents";
export default function Destination() {
  let dataWisata = [
    {
      title: "Wisata Air Mancur",
      location: "Jawa Timur",
      price: "120000",
      rating: "1.0",
    },
    {
      title: "Wisata Gunung",
      location: "Jawa Tengah",
      price: "90000",
      rating: "5.0",
    },
    {
      title: "Wisata Pantai",
      location: "Bunaken",
      price: "909090",
      rating: "3.0",
    },
    {
      title: "Wisata Masa Lalu",
      location: "Hati Masing Masing",
      price: "-",
      rating: "0.0",
    },
  ];
  return (
    <>
      <section id="destination">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold">Explore Natural Destinations</h1>
              <p className="text-subheader">
                A new way to travel by air the easy and fast way. <br /> Try it
                now by filling out the form below!
              </p>
            </div>
          </div>

          <div className="row">
            {dataWisata.map((item) => {
              return (
                <DestinationComponents
                  key={item.title}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
