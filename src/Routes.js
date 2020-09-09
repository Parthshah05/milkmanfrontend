import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./components/Login/signin";
import Signup from "./components/Register/signup";
import User from "./containers/User/users";
import EditUser from "./containers/User/editUser";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/allUsers" component={User} />
          <Route path="/editUser/:id" component={EditUser} />
          <Route path="/" exact component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
