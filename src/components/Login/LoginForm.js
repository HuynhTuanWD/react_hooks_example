import React from "react";
export default function LoginForm() {
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
            className="form-horizontal m-t-20"
            id="loginform"
            action="index.html"
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
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group">
                  <div className="p-t-20">
                    <button
                      className="btn btn-info"
                      id="to-recover"
                      type="button"
                    >
                      <i className="fa fa-lock m-r-5" /> Lost password?
                    </button>
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
        <div id="recoverform">
          <div className="text-center">
            <span className="text-white">
              Enter your e-mail address below and we will send you instructions
              how to recover a password.
            </span>
          </div>
          <div className="row m-t-20">
            {/* Form */}
            <form className="col-12" action="index.html">
              {/* email */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-danger text-white"
                    id="basic-addon1"
                  >
                    <i className="ti-email" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              {/* pwd */}
              <div className="row m-t-20 p-t-20 border-top border-secondary">
                <div className="col-12">
                  <a
                    className="btn btn-success"
                    href="#"
                    id="to-login"
                    name="action"
                  >
                    Back To Login
                  </a>
                  <button
                    className="btn btn-info float-right"
                    type="button"
                    name="action"
                  >
                    Recover
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
