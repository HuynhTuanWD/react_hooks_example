import React from "react";
import { useInput } from "../../hooks/input-hook";
import axios from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
export default function LoginForm() {
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");
  const handleLogin = async evt => {
    evt.preventDefault();
    try {
      let res = await axios.post("/api/user/signIn", {
        username,password
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Thành công",
          text: "Đăng nhập thành công",
          type: "success",
          confirmButtonText: "OK"
        });
        resetUsername();
        resetPassword();
        sessionStorage.setItem('token',res.data.token);
        return <Redirect to="/admin" />;
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Lỗi",
        text: "Sai tài khoản hoặc mật khẩu",
        type: "error",
        confirmButtonText: "OK"
      });
    }
  };
  return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
      <div className="auth-box bg-dark border-top border-secondary">
        <div id="loginform">
          <div className="text-center p-t-20 p-b-20">
            <span className="db">
              <img src="../../assets/images/logo.png" alt="logo" />
            </span>
          </div>
          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="form-horizontal m-t-20"
            id="loginform"
          >
            <div className="row p-b-30">
              <div className="col-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-success text-white"
                      id="basic-addon1"
                    >
                      <i className="ti-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                    value={username}
                    {...bindUsername}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-warning text-white"
                      id="basic-addon2"
                    >
                      <i className="ti-pencil" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    required
                    value={password}
                    {...bindPassword}
                  />
                </div>
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group">
                  <div className="p-t-20">
                    <button
                      className="btn btn-success float-right"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
