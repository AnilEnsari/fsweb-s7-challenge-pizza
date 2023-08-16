import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./home.css";
import Icon1 from "../icons/1.svg";
import Icon2 from "../icons/2.svg";
import Icon3 from "../icons/3.svg";
import Icon4 from "../icons/4.svg";
import Icon5 from "../icons/5.svg";
import Icon6 from "../icons/6.svg";

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
              <NavLink to="/">
                <img id="icon" src={Icon1} alt="ıcon" />
                YENİ! Kore
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Icon2} alt="ıcon" />
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Icon3} alt="ıcon" />
                Burger
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Icon4} alt="ıcon" />
                Kızartmalar
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Icon5} alt="ıcon" />
                Fast Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img id="icon" src={Icon6} alt="ıcon" />
                Gazlı İçecekler
              </NavLink>
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
    </div>
  );
};
export default Home;
