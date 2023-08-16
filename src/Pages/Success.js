import React from "react";
import "./success.css";

const Success = ({ exChoosen }) => {
  return (
    <div className="main-container">
      <div className="basliklar">
        <h2>Teknolojik Yemekler {exChoosen}</h2>
      </div>
      <div className="tebriks">
        <h1>TEBRİKLER! </h1>
        <h1>SİPARİŞİNİZ ALINDI</h1>

        {exChoosen.map((urunler) => (
          <p>{urunler}</p>
        ))}
      </div>
    </div>
  );
};
export default Success;
