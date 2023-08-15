import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="mainContainer1">
      <div className="yazilar">
        <h2>Teknolojik Yemekler</h2>
        <h1>KOD ACIKTIRIR PIZZA, DOYURUR</h1>
        <Link to="/pizza">
          <button id="order-pizza" className="hungry">
            Acıktım
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
