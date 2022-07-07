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

  let [quantity, setQuantity] = useState(0);
  let [cartQTY, setCartQTY] = useState(0);
  let [cost, setCost] = useState(0);

  // checks if qty is negative
  const checkQty = () => {
    if (quantity > 0) {
      setCartQTY(cartQTY = quantity);
    }
  }

  // Deletes entire cart by reducing cart to to 0
  const Delete = () => {
    if (cartQTY > 0) {
      setQuantity(quantity = 0);
      setCartQTY(cartQTY = quantity);
    }
  }

  // Carousel change full size images when clicked


  let num = 0;

  const prevImage = () => {
    num--;
    let ProductImages = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];
    let slider = document.getElementById('slider');
    if (num < 0 ) {
      num = ProductImages.length - 1;
    } slider.src = ProductImages[num];
  }

  const nextImage = () => {
    num++;
    let ProductImages = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];
    let slider = document.getElementById('slider');
    if (num >= ProductImages.length) {
      num = 0;
    } slider.src = ProductImages[num];

  }

  // Thumbnail functions to display different full product images

  const thumbnailViewer1 = () => {
    let fullImage = document.getElementById('slider');
    fullImage.src = ProductImg1;
  }

  const thumbnailViewer2 = () => {
    let fullImage = document.getElementById('slider');
    fullImage.src = ProductImg2;
  }

  const thumbnailViewer3 = () => {
    let fullImage = document.getElementById('slider');
    fullImage.src = ProductImg3;
  }

  const thumbnailViewer4 = () => {
    let fullImage = document.getElementById('slider');
    fullImage.src = ProductImg4;
  }

  return (
    <main>

      <div className="images-container">
        {/* Full size images */}
        <div className="product-images-container">
          <img id="slider" onClick={DisplayModal} className="product-img show" src={ProductImg1} alt="product pic"></img>
          <div className="carousel-container">
            <div className="left-chevron chevron-container">
              <FontAwesomeIcon onClick={prevImage} className="chevron previous" icon={faChevronLeft } />
            </div>
            <div className="right-chevron chevron-container">
              <FontAwesomeIcon onClick={nextImage} className="chevron next" icon={faChevronRight } />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail-images-container">
          <img id="thumbnail1" className="thumbnail" onClick={thumbnailViewer1} src={Thumbnail1} alt="thumbnail"></img>
          <img className="thumbnail" onClick={thumbnailViewer2} src={Thumbnail2} alt="thumbnail"></img>
          <img className="thumbnail" onClick={thumbnailViewer3} src={Thumbnail3} alt="thumbnail"></img>
          <img className="thumbnail" onClick={thumbnailViewer4} src={Thumbnail4} alt="thumbnail"></img>
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
          <button onClick={() => {checkQty(); setCost(125 * cartQTY)}} className="add-to-cart">
            <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
            Add to cart
          </button>
        </div>
      </div>

      {/* Cart */}
      <div id="cart" className="cart">

        <div className="cart-title">
          <h2>Cart</h2>
        </div>

        {/* Display empty cart container when qty is 0
            Otherwise, display qty added */}
        <div className="cart-quantity-container">
          {cartQTY === 0 ? 
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
                  <p className="cal-quantity">$125.00 x {cartQTY} <span>${cost}.00</span></p>
                </div>

                {/* Delete */}
                <img className="delete" onClick={Delete} src={TrashCan} alt="delete"/>
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