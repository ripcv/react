import { Link } from 'react-router-dom';
import './CategoryContainer.css'

import React from 'react'

const CategoryContainer = ({ categorieData }) => {
  return (
    <div className="categorias">
      <span>Categorias:</span>
      <ul>
        <li><Link to={'/tienda'}>Todos</Link></li>
        {categorieData.map((category, index) => {
          return (
            <li key={index} ><Link to={`/tienda/categoria/${category}`}>
              {category}
            </Link></li>
          );
        })}
      </ul>
    </div>
  )
}

export default CategoryContainer