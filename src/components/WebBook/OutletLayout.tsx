import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const LayoutRoute: React.FC = () => {
  const [showCart, setShowCart] = useState(true);
  return (
    <div className={`body-hero ${showCart ? "showCart" : ""}`}>
      <div>
        <Header />
        <Outlet />
      </div>
      <div className="cartTab pt-20">
        <h1>Shopping Cart</h1>
        <div className="listCart">
          <div className="item">
            <div className="item-img">
              <img src="https://lh3.googleusercontent.com/bhg6FoxZPA5S6q50_Gmu6YgMt2GcKxpjsbnaRvvHUwSV9JSnAj83TpbJEHIJjgKnbNoZmM7Mnx0pBlUau5CG2yIOG5v7rGc=w100-rw" />
            </div>
            <div className="item-info">
              <div className="item-name">
                <h3>Book Name</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className="item-price">
                <span>100$</span>
              </div>
              <div className="item-quantity">
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button class="close">CLOSE</button>
          <button class="checkOut">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default LayoutRoute;
