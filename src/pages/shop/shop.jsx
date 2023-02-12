import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Navbar from '../../components/navbar'
import Fade from 'react-reveal/Fade';
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
    <Navbar/>
      <div className="shopTitle">
        {/*<h1>Priyanka's Cafe</h1>*/}
      </div>

      <div className="products">
      <Fade bottom>
        {PRODUCTS.map((product,i) => (
          <Product key={i} data={product} />
        ))}
        </Fade>
      </div>
    </div>
  );
};
