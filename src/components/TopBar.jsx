import React from "react";
import foto from "../assets/logo-blanco.png";

export function TopBar() {
  return (
    <React.Fragment>
      {/*<!-- Topbar -->*/}
      <nav className="navbar navbar-expand navbar-light bg-black topbar mb-4 static-top shadow">
        {/*<!-- Sidebar Toggle (Topbar) -->*/}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>
        {/*<!-- Mensaje animado -->*/}
        <span className="message">
          <link rel="stylesheet" href="" />
          <a href="http://localhost:3001/" target="_blank">
            <i className="fa-solid fa-music"></i>
            <span> Ir a la web: Vindicator Vinyls </span>
            <i className="fa-solid fa-music"></i>
          </a>
        </span>
      </nav>
      {/*<!-- End of Topbar -->*/}
    </React.Fragment>
  );
}
