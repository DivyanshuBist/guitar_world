import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import Loadingbox from "../components/Loadingbox";
import Error from "../components/Error";
export default function HomeScreen() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    try {
      setloading(true);
      fetch("/api/product")
        .then((res) => {
          if (res.ok) {
            setloading(false);
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setproducts(jsonResponse);
        })
        .catch((err) => {
          seterror(err.message);
          console.log("error");
          setloading(false);
        });
    } catch (err) {
      seterror(err.message);
      setloading(false);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loadingbox></Loadingbox>
      ) : error ? (
        <Error variant="danger">{error}</Error>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Products key={product.key} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
