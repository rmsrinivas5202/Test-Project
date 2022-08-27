import React from "react";
import dc from './assets/dc.jpeg'
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light py-6">
        <div class="container">
          <a class="navbar-brand fw-bold fs-2" href="#">
            
            <img src={dc} height={40} width={70} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
               
            </ul>
           <div className="buttons">
            <a href="" className="btn btn-outline-danger ms-4 fw-bold fs-4">
                <i className="fa fa-login"></i>Login</a>
                
            <a href="" className="btn btn-danger ms-4 fw-bold fs-4">
                <i className="fa fa-Register"></i>Register</a>
           </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
