import React from "react";
import data from "../data";
import Ratings from "../components/Ratings";
import { Link } from "react-router-dom";
export default function ProductScreen(props) {
  const product = data.products.find(
    (x) => x._id === Number(props.match.params.id)
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div>
        <Link to="/">Back to main</Link>
      </div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Brand : {product.Brand}</li>
            <li>Category : {product.category}</li>
            <li>
              <Ratings
                rating={product.rating}
                numreviews={product.numreviews}
              />
            </li>
            <li>Price : Rs.{product.price}/-</li>
            <li>
              <a href={product.official}>More {product.Brand} Products</a>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">Rs {product.price}/-</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.stock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="failure">Out Of Stock</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary">Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
