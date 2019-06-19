import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from './layouts/Admin'
import Login from './layouts/Login'
function App() {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/admin" />
    </Switch>
  );
}

export default App;
