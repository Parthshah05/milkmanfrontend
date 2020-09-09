import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./components/Login/signin";
import Signup from "./components/Register/signup";
import User from "./containers/User/users";
import EditUser from "./containers/User/editUser";
import Home from "./components/Core/home";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/allUsers" component={User} />
          <Route path="/editUser/:id" component={EditUser} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
