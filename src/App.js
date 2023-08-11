import React from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Home from "./Pages/Home";
import Success from "./Pages/Success";

const App = () => {
  const foodList = {
    foodName: "Ege Pizza",
    foodPrice: 150,
    foodimg: "C:\fsweb-s7-challenge-pizzaAssetsadv-aseets\food-1.png",
    description:
      "Egenin taze toplanmış organik ürünleriyle İtalya'nın dillere destan olmuş bu lezzetini birleştirdik. Hala denmediysen çok şey kaçırıyorsun. Üstenlik developer'ımız sizler için üşenmedi ve öyle bir checklist oluşturduki istediğin ürünleri anında ekleyip çıkarabileceksin ve  tüm bunları yaparken Single Page Application Kullandığı için fiyat hesaplamalarında kuryemiz kadar hızlı olacak ve anında ekranını görebileceksin. Evet bir bizce de bir  bahşişi hakkediyor.",
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order">
          <Order foodList={foodList} />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
