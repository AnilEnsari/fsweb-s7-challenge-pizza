import React, { useState } from "react";
import ZorunluFormlar from "../components/ZorunluFormlar";
import EkMalzemeler from "../components/EkMalzemeler";
import Siparisnotu from "../components/Siparisnotu";
import Hesap from "../components/Hesap";
const Order = (props) => {
  const foodList = {
    foodName: "Ege Pizza",
    foodPrice: 150,
    foodimg: "C:\fsweb-s7-challenge-pizzaAssetsadv-aseets\food-1.png",
    description:
      "Egenin taze toplanmış organik ürünleriyle İtalya'nın dillere destan olmuş bu lezzetini birleştirdik. Hala denmediysen çok şey kaçırıyorsun. Üstenlik developer'ımız sizler için üşenmedi ve öyle bir checklist oluşturduki istediğin ürünleri anında ekleyip çıkarabileceksin ve  tüm bunları yaparken Single Page Application Kullandığı için fiyat hesaplamalarında kuryemiz kadar hızlı olacak ve anında ekranını görebileceksin. Evet bir bizce de bir  bahşişi hakkediyor.",
  };
  const [ekstra, setEkstra] = useState(0);
  function ekstraHesapla(ekstraAdedi) {
    setEkstra(ekstraAdedi * 5);
  }
  return (
    <div>
      <header>
        <h1>Teknolojik Yemekler </h1>
        <nav>
          <a href="/"> Ana Sayfa</a>
          <a href="/"> Seçenekler</a>
          <a href="order"> Sipariş Oluştur</a>
        </nav>
      </header>

      <h3>{foodList.foodName}</h3>
      <div class="pricecontainer">
        {foodList.foodPrice}₺
        <div class="review container">
          <div class="point">4,9</div>
          <div class="review">200</div>
        </div>
        <p>{foodList.description}</p>
      </div>
      <EkMalzemeler ekstraHesapla={ekstraHesapla} />
      <ZorunluFormlar />
      <Siparisnotu />
      <hr></hr>
      <Hesap foodList={foodList} ekstra={ekstra} />

      <a href="success">
        <button>Onayla</button>
      </a>
    </div>
  );
};
export default Order;
