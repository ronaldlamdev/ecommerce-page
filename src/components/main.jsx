import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ProductImg1 from '../images/image-product-1.jpg';
import ProductImg2 from '../images/image-product-2.jpg';
import ProductImg3 from '../images/image-product-3.jpg';
import ProductImg4 from '../images/image-product-4.jpg';
import Thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import Thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import Thumbnail4 from '../images/image-product-4-thumbnail.jpg';
import Minus from '../images/icon-minus.svg';
import Plus from '../images/icon-plus.svg';
import TrashCan from '../images/icon-delete.svg'
import CartThumbnail from '../images/image-product-1-thumbnail.jpg';

const Main = () => {

  const DisplayModal = () => {
    const modal = document.getElementById('modal');

    if (window.innerWidth >= 1200) {
      if (modal.style.display === "none") {
        modal.style.display = "block";
      } else {
        modal.style.display = 'none';
      }
    }
  }

  const [quantity, setQuantity] = useState(0);

  return (
    <main>
      <div className="images-container">
        {/* Full size images */}
        <div className="product-images-container">
          <img onClick={DisplayModal} className="product-img" src={ProductImg1} alt="product pic"></img>
          <img onClick={DisplayModal} className="product-img" src={ProductImg2} alt="product pic" hidden></img>
          <img onClick={DisplayModal} className="product-img" src={ProductImg3} alt="product pic" hidden></img>
          <img onClick={DisplayModal} className="product-img" src={ProductImg4} alt="product pic" hidden></img>
          {/* Carousel Arrows from Font Awesome */}
          <div className="carousel-container">
            <div className="left-chevron chevron-container">
              <FontAwesomeIcon className="chevron previous" icon={faChevronLeft } />
            </div>
            <div className="right-chevron chevron-container">
              <FontAwesomeIcon className="chevron next" icon={faChevronRight } />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail-images-container">
          <img className="thumbnail active" src={Thumbnail1} alt="thumbnail"></img>
          <img className="thumbnail" src={Thumbnail2} alt="thumbnail"></img>
          <img className="thumbnail" src={Thumbnail3} alt="thumbnail"></img>
          <img className="thumbnail" src={Thumbnail4} alt="thumbnail"></img>
        </div>
      </div>

      <div className="text-container">
        {/* Information about product */}
        <div className="info-container">
          <h1 className="title">Sneaker Company</h1>
          <h1 className="product-name">Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low profile sneakers are your perfect casual
            wear companion. Featuring a durable rubber outer sole,
            they'll withstand everything the weather can offer.
          </p>
        </div>

        {/* Price */}
        <div className="price-container">
          <h1 className="net-price">$125.00 <span className="discount">50%</span></h1>
          <h2 className="gross-price">$250.00</h2>
        </div>

        {/* Quantity Container */}
        <div className="buy-quantity-container">
          {/* Div to add or subtract from container */}
          <div className="quantity-container">
            <img src={Minus} onClick={() => setQuantity(quantity - 1)} className="minus counter" alt="minus" />
            <span id="quantity" className="quantity">{quantity}</span>
            <img src={Plus} onClick={() => setQuantity(quantity + 1)} className="plus counter" alt="plus" />
          </div>

          {/* Add to cart */}
          <button className="add-to-cart">
            <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
            Add to cart
          </button>
        </div>
      </div>

      <div id="cart" className="cart">

        <div className="cart-title">
          <h2>Cart</h2>
        </div>

        {/* Display empty cart container when qty is 0
            Otherwise, display qty added */}
        <div className="cart-quantity-container">
          {quantity === 0 ? 
            <div className="cart-empty-container">
              <p>Your cart is empty</p>
            </div>
          : <div className="calc-quantity-container">

              <div className="cart-info-container">
                {/* Cart thumbnail */}
                <img className="cart-thumbnail" src={CartThumbnail}
                alt="cart thumbnail"/>

                <div className="quantity-info-container">
                  <p className="cart-product-title">Fall Limited Edition Sneakers</p>
                  <p className="cal-quantity">$125.00 x {quantity} <span>$0.00</span></p>
                </div>

                {/* Delete */}
                <img className="delete" src={TrashCan} alt="delete"/>
              </div>

              <div className="checkout-container">
                <button className="checkout">Checkout</button>
              </div>
            </div>}
        </div>
      </div>
    </main>
  )
}

export default Main;