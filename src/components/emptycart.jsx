import React from "react";

const EmptyCart = () => {
  return (
    <div className="empty-cart">

      {/* Title */}
      <div className="empty-cart-title">
        <h2>Cart</h2>
      </div>

      {/* Cart Empty */}

      <div className="empty-cart-sentence">
        <p>Your cart is empty.</p>
      </div>
    </div>
  )
}

export default EmptyCart;