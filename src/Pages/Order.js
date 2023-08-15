import React, { useState } from "react";
import ZorunluFormlar from "../components/ZorunluFormlar";
import EkMalzemeler from "../components/EkMalzemeler";
import Siparisnotu from "../components/Siparisnotu";
import Hesap from "../components/Hesap";
import Name from "../components/Name";
import "./order.css";
import Header1 from "../layouts/Header1";
const Order = (props) => {
  const foodList = {
    foodName: "Ege Pizza",
    foodPrice: 150,
    foodimg: "C:\fsweb-s7-challenge-pizzaAssetsadv-aseets\food-1.png",
    description:
      "Egenin taze toplanmış organik ürünleriyle İtalya'nın dillere destan olmuş bu lezzetini birleştirdik. Hala denemediysen çok şey kaçırıyorsun. Üstenlik developer'ımız sizler için üşenmedi ve öyle bir checklist oluşturduki istediğin ürünleri anında ekleyip çıkarabileceksin ve  tüm bunları yaparken Single Page Application Kullandığı için fiyat hesaplamaları da kuryemiz kadar hızlı olacak ve anında ekranını görebileceksin. Evet bizce de bir  bahşişi hakkediyor.",
  };
  const [ekstra, setEkstra] = useState(0);
  function ekstraHesapla(ekstraAdedi) {
    setEkstra(ekstraAdedi * 5);
  }

  return (
    <div>
      <Header1 />
      <div className="mainContainer">
        <h3>{foodList.foodName}</h3>
        <div className="priceContainer">
          <h3 className="foodPrice"> {foodList.foodPrice}₺</h3>
          <span className="reviewContainer">
            <span>4,9</span>
            <span>200</span>
          </span>
        </div>

        <p>{foodList.description}</p>
        <ZorunluFormlar />
        <EkMalzemeler ekstraHesapla={ekstraHesapla} />
        <Name />
        <Siparisnotu />
        <hr></hr>
        <Hesap foodList={foodList} ekstra={ekstra} />
      </div>
    </div>
  );
};
export default Order;
