import React from "react";
import "./success.css";

const Success = ({ exchoose }) => {
  return (
    <div className="main-container">
      <div className="basliklar">
        <h2>Teknolojik Yemekler</h2>
      </div>
      <div className="tebriks">
        <h1>TEBRİKLER! {exchoose}</h1>
        <h1>SİPARİŞİNİZ ALINDI</h1>
        <p>{exchoose}</p>
      </div>
    </div>
  );
};
export default Success;
