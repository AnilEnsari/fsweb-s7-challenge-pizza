import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="mainContainer1">
      <h1>Teknolojik Yemekler</h1>
      <Link to="order">
        <button>Acıktım</button>
      </Link>
    </div>
  );
};
export default Home;
