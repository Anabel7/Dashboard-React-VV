import React, { useState, useEffect } from "react";
import { SmallCard } from "./SmallCard";

export function ContentRowTotales() {
  const [productTotal, setProductTotal] = useState(0);
  const [userTotal, setUserTotal] = useState(0);
  const [categoryTotal, setCategoryTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total products
        const productResponse = await fetch(
          "http://localhost:3001/api/products"
        );
        if (!productResponse.ok) {
          throw new Error("Failed to fetch product data from the API");
        }
        const productData = await productResponse.json();
        setProductTotal(productData.count);
        setCategoryTotal(Object.keys(productData.countByCategory).length);

        // Fetch total users
        const userResponse = await fetch("http://localhost:3001/api/users");
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data from the API");
        }
        const userData = await userResponse.json();
        setUserTotal(userData.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  /*  Cada set de datos es un objeto literal */

  /* <!-- Total de Productos --> */

  let totalProducts = {
    title: "Total de Productos",
    color: "primary",
    cuantity: productTotal,
    icon: "fa-solid fa-compact-disc",
  };

  /* <!-- Total de Usuarios --> */

  let totalUsers = {
    title: " Total de Usuarios",
    color: "success",
    cuantity: userTotal,
    icon: "fa-solid fa-users",
  };

  /* <!-- Total de Categorías --> */

  let totalCategories = {
    title: "Total de Categorías",
    color: "warning",
    cuantity: categoryTotal,
    icon: "fa-solid fa-music",
  };

  let cartProps = [totalProducts, totalUsers, totalCategories];

  return (
    <div className="row">
      {cartProps.map((total, i) => {
        return <SmallCard {...total} key={i} />;
      })}
    </div>
  );
}
