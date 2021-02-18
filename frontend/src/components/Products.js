import React from "react";
import Ratings from "./Ratings";
export default function Products(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Ratings rating={product.rating} numreviews={product.numreviews} />
        <div className="price">Rs.{product.price}</div>
      </div>
    </div>
  );
}
