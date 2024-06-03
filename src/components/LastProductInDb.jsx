import React, { useState, useEffect } from "react";

export function LastProductInDb() {
  const [lastProduct, setLastProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Obtenemos el último producto de la lista
        const products = data.products;
        const lastProduct = products[products.length - 1];
        setLastProduct(lastProduct);

        fetch(`http://localhost:3001/api/products/${lastProduct.id}`)
          .then((response) => response.json())
          .then((productData) => {
            const productDetail = productData.data;
            setProductDetail(productDetail);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto agregado
          </h5>
        </div>
        <div className="card-body">
          {lastProduct && (
            <>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  src={productDetail.cover_path}
                  alt={productDetail.product_title}
                />
              </div>
              <p>Discografica: {lastProduct.labels}</p>
              <p>{productDetail.product_info}</p>
              <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href={lastProduct.detail}
                id="magenta"
              >
                Ver detalles
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
