import React, { useState, useEffect } from 'react';
import { Category } from './Category';

export function CategoriesInDB() {
  const [categoriesName, setCategoriesName] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        const { countByCategory } = data;
        const categoriesName = Object.keys(countByCategory).map(category => ({
          categoryName: category,
          categoryCount: countByCategory[category]
        }));
        setCategoriesName(categoriesName);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Géneros musicales en la Base de Datos</h5>
        </div>
        <div className="card-body">
          <div className="row" >
            {categoriesName.map(genre => (
              <Category
                key={genre.categoryName}
                name={genre.categoryName}
                count={genre.categoryCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
