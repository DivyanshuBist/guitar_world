import React from "react";
import Products from "../components/Products";
import data from "../data";
export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Products key={product.key} product={product} />
        ))}
      </div>
    </div>
  );
}
