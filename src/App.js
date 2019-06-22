import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./layouts/Admin";
import Login from "./layouts/Login";
import Swal from "sweetalert2";
import axios from "axios";
function App() {
  return (
    <Switch>
      <PrivateRoute path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/admin" />
    </Switch>
  );
}
function Auth() {
  const auth = sessionStorage.getItem("token");
}
function PrivateRoute({ component: Component, ...rest }) {
  const [login, setLogin] = useState(false);
  useEffect(async () => {
    async function fetchLogin() {
      try {
        console.log("token", sessionStorage.getItem("token"));
        let isLogin = await axios.get("/api/user/isLogin", {
          headers: { Authorization: sessionStorage.getItem("token") }
        });
        if (isLogin.status == 200) {
          setLogin(isLogin);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchLogin();
  }, {});
  return (
    <Route
      {...rest}
      render={props =>
        login ? (
          <Component {...props} />
        ) : (
          <>
            {
              !Swal.fire({
                title: "Yêu cầu đăng nhập!",
                text: "Bạn phải đăng nhập để thực hiện chức năng này!",
                type: "error",
                confirmButtonText: "OK"
              })
            }
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          </>
        )
      }
    />
  );
}
export default App;
