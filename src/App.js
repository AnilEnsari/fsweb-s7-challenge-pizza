import React from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Home from "./Pages/Home";
import Success from "./Pages/Success";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
