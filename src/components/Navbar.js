import React from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo1.svg";
import Register from './auth/Register'

const Navbar = () => {
  const isSignUp = true;
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" href="/home">
            <img src={logo} alt="logo" className="w-50 h-25 m-0" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} className="nav-item justify-space-around ">
                    <a
                      className="nav-link text-uppercase"
                      aria-current="page"
                      href={url}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav ml-5 me-auto mb-2 mb-lg-0">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li className="nav-item" key={id}>
                    <a
                      className="nav-link text-capitalize text-primary fs-5"
                      aria-current="page"
                      href={url}
                      target = '_blank'
                    >
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="btn btn-primary rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign In
            </button>
            <div
              className="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content w-75">
                  
                  <div class="d-flex align-items-end flex-column">
                    <button
                      type="button"
                      className="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <h1
                    className="modal-title fs-5 text-dark d-block mx-auto fw-bold"
                    id="exampleModalLabel"
                  >
                    {isSignUp ? "Register" : "Log In"}
                  </h1>

                  <div className="modal-body">
                    <Register />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
