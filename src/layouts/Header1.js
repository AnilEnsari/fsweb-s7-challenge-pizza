import React from "react";
// import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div>
      <header>
        <div className="headerContainer">
          <h1>Teknolojik Yemekler </h1>
          {/* <nav>
            <Link className="renka" to="/">
              Ana Sayfa-
            </Link>
            <Link className="renka" to="/">
              Seçenekler-
            </Link>
            <Link to="/pizza"> Sipariş Oluştur</Link>
          </nav> */}
        </div>
      </header>
      <div className="bannerimg"></div>
    </div>
  );
};
export default Header1;
