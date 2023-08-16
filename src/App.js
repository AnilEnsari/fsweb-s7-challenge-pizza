import React from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
const exChoosen = [];
const App = () => {
  exChoosen.map((exchoose) => exchoose);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza" exact>
          <Order exChoosen={exChoosen} />
        </Route>
        <Route path="/success" exact>
          <Success exchoose={exChoosen.map((exchoose) => exchoose)} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
