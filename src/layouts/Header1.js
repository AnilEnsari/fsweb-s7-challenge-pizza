import React from "react";

const Header1 = () => {
  return (
    <header>
      <div className="headerContainer">
        <h1>Teknolojik Yemekler </h1>
        <nav>
          <a className="renka" href="/">
            Ana Sayfa-
          </a>
          <a className="renka" href="/">
            Seçenekler-
          </a>
          <a href="order"> Sipariş Oluştur</a>
        </nav>
      </div>
    </header>
  );
};
export default Header1;
