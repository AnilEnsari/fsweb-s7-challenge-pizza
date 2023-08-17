import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Icon1 from "../icons/1.svg";
import Icon2 from "../icons/2.svg";
import Icon3 from "../icons/3.svg";
import Icon4 from "../icons/4.svg";
import Icon5 from "../icons/5.svg";
import Icon6 from "../icons/6.svg";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
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
      <div className="side-menu">
        <nav className="navMenu">
          <ul>
            <li>
              <Link to="/">
                <img id="icon" src={Icon1} alt="ıcon" />
                YENİ! Kore
              </Link>
            </li>
            <li>
              <Link to="/">
                <img id="icon" src={Icon2} alt="ıcon" />
                Pizza
              </Link>
            </li>
            <li>
              <Link to="/">
                <img id="icon" src={Icon3} alt="ıcon" />
                Burger
              </Link>
            </li>
            <li>
              <Link to="/">
                <img id="icon" src={Icon4} alt="ıcon" />
                Kızartmalar
              </Link>
            </li>
            <li>
              <Link to="/">
                <img id="icon" src={Icon5} alt="ıcon" />
                Fast Food
              </Link>
            </li>
            <li>
              <Link to="/">
                <img id="icon" src={Icon6} alt="ıcon" />
                Gazlı İçecekler
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="images">
        <div className="firstimg"></div>
        <div className="secondandthirdimg">
          <div className="secondimg"></div>
          <div className="thirdimg"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
