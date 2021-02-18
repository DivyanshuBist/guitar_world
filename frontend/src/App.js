import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="main_container">
        <header className="row">
          <div className="header_left">
            <a className="name" href="/">
              <img className="header_img" src="/image/guitar.png" alt="" />
              <span>GUITAR WORLD</span>
            </a>
          </div>
          <div className="header_right">
            <a href="/Cart">Cart</a>
            <a href="/SignIn">SignIn</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center f">
          <div>All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
