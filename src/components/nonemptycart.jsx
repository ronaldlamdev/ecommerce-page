import React from "react";
import TrashCan from '../images/icon-delete.svg';
import CartThumbnail from '../images/image-product-1-thumbnail.jpg';

const NonEmptyCart = () => {
  return (
    <div className="non-empty-cart">
      
      {/* Cart when full */}
      <div className="non-empty-cart-sentence">

        {/* Cart when added */}
        <div className="cart-quantity-container">
          <img src={CartThumbnail} alt="cart thumbnail"/>
          <div className="cart-qty-info-container">
            <h6 className="cart-product-title">Fall Limited Edition Sneakers</h6>
            <h6 className="cart-price">$125.00 x 0 <span className="price">$0</span></h6>
          </div>
          <img className="delete" src={TrashCan} alt="delete" />
        </div>

        {/* Checkout Button */}
        <button className="checkout">Checkout</button>
      </div>
    </div>
  )
};

export default NonEmptyCart;