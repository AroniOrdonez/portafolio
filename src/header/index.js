import React from "react";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";
import "./style.css"; // Asegúrate de importar tu hoja de estilos

const Navbar = () => {
  return (
    <header className="fixed-top site__header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <Themetoggle />
        </div>
        <nav>
          {/* Nuevo contenedor con fondo negro */}
          <div className="nav-links-container">
            <ul className="main__menu_ul">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Acerca de mi
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contactame
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
