import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
      <div className="row container">
        <div className="col-md-8">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src="images/logo.jpg" alt="Logo" width="80px"/>
              </a>
              <span class="navbar-brand mb-0 h1">Hardcodding, tu tienda de teclados!</span>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/productos">Teclados</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/sobreNosotros">Nuestra misión</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/logIn">Log In</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-4 d-flex justify-content-around align-items-center">
          <CartWidget/>
        </div>
      </div>

      
    )
}

export default Navbar;