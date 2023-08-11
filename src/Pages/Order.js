import React, { useState } from "react";

const Order = (props) => {
  const { foodList } = props;
  const [pizzaPrice, setPizzaPrice] = useState(foodList.foodPrice);
  return (
    <div>
      <header>
        <h1>Teknolojik Yemekler {foodList.foodName}</h1>
        <nav>
          <a href="/"> Ana Sayfa</a>
          <a href="/"> Seçenekler</a>
          <a href="order"> Sipariş Oluştur</a>
        </nav>
      </header>

      <h3>{foodList.foodName}</h3>
      <div class="pricecontainer">
        {pizzaPrice}₺
        <div class="review container">
          <span>4,9</span>
          <span>200</span>
        </div>
        <p>{foodList.description}</p>
      </div>
      <div class="sizeandwidthcontainer">
        <form class="sizecontainer">
          <label name="kucuk">
            Küçük
            <input name="kucuk" type="checkbox"></input>
          </label>
        </form>
      </div>

      <a href="success">
        <button>Onayla</button>
      </a>
    </div>
  );
};
export default Order;
