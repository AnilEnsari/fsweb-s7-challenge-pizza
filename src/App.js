import React from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Pages/Order";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import { useState } from "react";
const App = () => {
  const [exChoosen, setExChoosen] = useState([]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza" exact>
          <Order setExChoosen={setExChoosen} />
        </Route>
        <Route path="/success" exact>
          <Success exChoosen={exChoosen} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
