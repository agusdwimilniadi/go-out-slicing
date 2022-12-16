import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Belajar() {
  //   const nama = "Rizky";
  //   const nama = "Adi";
  const [nama, setNama] = useState("Rizky");

  function gantiNama() {
    setNama("Adi");
  }
  return (
    <>
      <h1>Belajar Props dan UseState + Router</h1>
      <h1>=================</h1>

      <h1>Belajar Props</h1>
      <h1>
        <u>Nama {nama}</u>
      </h1>
      <button onClick={gantiNama}>Ganti Nama</button>
      <h1>=================</h1>

      <h1>Belajar Props</h1>
      <Card judul="Judul A" />
      <Card judul="Judul B" />
      <Card judul="Judul C" />

      <button onClick={gantiNama}>Ganti Nama</button>

      <h1>Belajar Props</h1>
      <h1>
        <u>Nama {nama}</u>
      </h1>
      <button onClick={gantiNama}>Ganti Nama</button>
      <h1>=================</h1>

      <h1>Belajar React Router DOM</h1>
      <Link />
      <button onClick={gantiNama}>Ganti Nama</button>
    </>
  );
}
