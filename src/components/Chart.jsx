import React, { useState, useEffect } from "react";
import { ChartRow } from "./ChartRow";

export function Chart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        const productPromises = data.products.map((product) =>
          fetch(`http://localhost:3001/api/products/${product.id}`)
            .then((res) => res.json())
        );
        Promise.all(productPromises)
          .then((productDetails) => {
            setProducts(productDetails.map((detail) => detail.data));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr id='productsRow'>
                <th>Título</th>
                <th>Género</th>
                <th>Artista</th>
                <th>Discográfica</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Título</th>
                <th>Género</th>
                <th>Artista</th>
                <th>Discográfica</th>
                <th>Stock</th>
              </tr>
            </tfoot>
            <tbody>
              {products.map((product, i) => (
                <ChartRow
                  key={i}
                  title={product.product_title}
                  genre={product.genre}
                  artist={product.artist}
                  labels={product.labels}
                  stock={product.stock}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}