import Table from 'react-bootstrap/Table';
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout.css"
import Navbar from '../../components/navbar'
import { CartItem } from "./cart-item";
import { PRODUCTS } from "../../products";
const Checkout =()=>{
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return(
      <>
      <Navbar/><br/>
      <h1>Your Bill</h1>
			<div className="checkout_div">
			<Table className="checkout_table" striped bordered hover>
      <thead>
        <tr>
          <th>no. </th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {PRODUCTS.map((product, i) => {
          if (cartItems[product.id] !== 0) {
            return(
              <tr>
          <td>{i+1}</td>
          <td>{product.productName}</td>
          <td>{cartItems[product.id]}</td>
          <td>₹{product.price}</td>
        </tr>)            
         }
        })}
        <tr>
          <th>Total</th>
          <th></th>
          <th></th>
          <th>₹{totalAmount}</th>
        </tr>
      </tbody>
    </Table></div>
    </>
		);
}

export default Checkout;


         // <CartItem data={product} />;