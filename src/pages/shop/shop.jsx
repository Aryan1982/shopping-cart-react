import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Navbar from '../../components/navbar'
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
    <Navbar/>
      <div className="shopTitle">
        <h1>Priyanka's Cafe</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
