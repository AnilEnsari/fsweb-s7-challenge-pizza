import React from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <header>
      <div className="headerContainer">
        <h1>Teknolojik Yemekler </h1>
        <nav>
          <Link className="renka" to="/">
            Ana Sayfa-
          </Link>
          <Link className="renka" to="/">
            Seçenekler-
          </Link>
          <Link to="/order"> Sipariş Oluştur</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header1;
