import React, { useState } from "react";
import ZorunluFormlar from "../components/ZorunluFormlar";
import EkMalzemeler from "../components/EkMalzemeler";
import Siparisnotu from "../components/Siparisnotu";
import Hesap from "../components/Hesap";
import Name from "../components/Name";
import "./order.css";
import Header1 from "../layouts/Header1";
const Order = (props) => {
  const [musteriIsmi, setMusteriIsmi] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamurKalinlik, setHamurKalinlik] = useState("");

  const [boolean1, setBoolean1] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);
  const [boolean4, setBoolean4] = useState(false);
  const [boolean5, setBoolean5] = useState(false);
  const [boolean6, setBoolean6] = useState(false);
  const [boolean7, setBoolean7] = useState(false);
  const [boolean8, setBoolean8] = useState(false);
  const [boolean9, setBoolean9] = useState(false);
  const [boolean10, setBoolean10] = useState(false);
  const [boolean11, setBoolean11] = useState(false);
  const [boolean12, setBoolean12] = useState(false);
  const [boolean13, setBoolean13] = useState(false);
  const [boolean14, setBoolean14] = useState(false);

  const foodList = {
    foodName: "Ege Pizza",
    foodPrice: 150,
    foodimg: "C:\fsweb-s7-challenge-pizzaAssetsadv-aseets\food-1.png",
    description:
      "Egenin taze toplanmış organik ürünleriyle İtalya'nın dillere destan olmuş bu lezzetini birleştirdik. Hala denemediysen çok şey kaçırıyorsun. Üstenlik developer'ımız sizler için üşenmedi ve öyle bir checklist oluşturduki istediğin ürünleri anında ekleyip çıkarabileceksin ve  tüm bunları yaparken Single Page Application Kullandığı için fiyat hesaplamaları da kuryemiz kadar hızlı olacak ve anında ekranını görebileceksin. Evet bizce de bir  bahşişi hakkediyor.",
    Siparisnotu: orderNote,
  };
  const orderObject = {
    isim: musteriIsmi,
    kalinlik: hamurKalinlik,
    size: boyut,
    adet: "",
    Siparisnotu: orderNote,
    secimUcreti: "",
    toplamUcret: "",
    pepperoni: boolean1,
    sosis: boolean2,
    kanadaJambonu: boolean3,
    tavukIzgara: boolean4,
    sogan: boolean5,
    domates: boolean6,
    misir: boolean7,
    sucuk: boolean8,
    jalepeno: boolean9,
    sarimsak: boolean10,
    biber: boolean11,
    salam: boolean12,
    ananas: boolean13,
    kabak: boolean14,
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
        <ZorunluFormlar
          setBoyut={setBoyut}
          setHamurKalinlik={setHamurKalinlik}
        />
        <EkMalzemeler
          orderObject={orderObject}
          ekstraHesapla={ekstraHesapla}
          boolean1={boolean1}
          setBoolean1={setBoolean1}
          boolean2={boolean2}
          setBoolean2={setBoolean2}
          boolean3={boolean3}
          setBoolean3={setBoolean3}
          boolean4={boolean4}
          setBoolean4={setBoolean4}
          boolean5={boolean5}
          setBoolean5={setBoolean5}
          boolean6={boolean6}
          setBoolean6={setBoolean6}
          boolean7={boolean7}
          setBoolean7={setBoolean7}
          boolean8={boolean8}
          setBoolean8={setBoolean8}
          boolean9={boolean9}
          setBoolean9={setBoolean9}
          boolean10={boolean10}
          setBoolean10={setBoolean10}
          boolean11={boolean11}
          setBoolean11={setBoolean11}
          boolean12={boolean12}
          setBoolean12={setBoolean12}
          boolean13={boolean13}
          setBoolean13={setBoolean13}
          boolean14={boolean14}
          setBoolean14={setBoolean14}
        />
        <Name setMusteriIsmi={setMusteriIsmi} />
        <Siparisnotu setOrderNote={setOrderNote} />
        <hr></hr>
        <Hesap foodList={foodList} orderObject={orderObject} ekstra={ekstra} />
      </div>
    </div>
  );
};
export default Order;
