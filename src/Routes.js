import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./components/signin";
import Signup from "./components/signup"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
     
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;