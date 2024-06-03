import React from "react";
import { SideBar } from "./components/SideBar";
import { CategoriesInDB } from "./components/CategoriesInDB";
import { LastProductInDb } from "./components/LastProductInDb";
import { ContentRowTotales } from "./components/ContentRowTotales";
import { ContentWrapper } from "./components/ContentWrapper";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router";

import "./App.css";

export function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<ContentWrapper />} />
              <Route path="/allGenres" element={<CategoriesInDB />} />
              <Route path="/lastProduct" element={<LastProductInDb />} />
              <Route path="/allProducts" element={<ContentRowTotales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
