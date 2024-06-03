import React from "react";
import { Link } from "react-router-dom";
import eric from "../assets/404.png";

const imgStyle = { width: "200px", borderRadius: "100%" };
const divStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  alignItems: "center",
};
const liStyle = { listStyleType: "none" };
const ulStyle = { display: "flex", justifyContent: "center" };

export const NotFound = () => {
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={eric} alt="eric-img" />
      <h1>¿Qué pasó, crack? ¿Te perdiste?</h1>
      <h4>"No todos los que deambulan están perdidos". (J. R. R. Tolkien)</h4>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </Link>
        </li>

        <li style={liStyle}>
          <Link className="nav-link" to="/allGenres">
            <i className="fa-solid fa-list"></i>
            <p>Géneros musicales</p>
          </Link>
        </li>

        <li style={liStyle}>
          <Link className="nav-link collapsed" to="/lastProduct">
            <i className="fas fa-fw fa-folder"></i>
            <p>Último producto en BD</p>
          </Link>
        </li>

        <li style={liStyle}>
          <Link className="nav-link" to="/allProducts">
            <i className="fas fa-fw fa-table"></i>
            <p>Productos</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

