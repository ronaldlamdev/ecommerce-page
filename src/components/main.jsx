import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductImg1 from '../images/image-product-1.jpg';
import ProductImg2 from '../images/image-product-2.jpg';
import ProductImg3 from '../images/image-product-3.jpg';
import ProductImg4 from '../images/image-product-4.jpg';
import Thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import Thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import Thumbnail4 from '../images/image-product-4-thumbnail.jpg';

const Main = () => {
  return (
    <main>
      <div className="images-container">
        {/* Full size images */}
        <div className="product-images-container">
          <img className="product-img" src={ProductImg1} alt="product pic"></img>
          <img className="product-img" src={ProductImg2} alt="product pic" hidden></img>
          <img className="product-img" src={ProductImg3} alt="product pic" hidden></img>
          <img className="product-img" src={ProductImg4} alt="product pic" hidden></img>
          {/* Carousel Arrows from Font Awesome */}
          <div className="carousel-container">
            <div className="left-chevron chevron-container">
              <FontAwesomeIcon icon={faChevronLeft } />
            </div>
            <div className="right-chevron chevron-container">
              <FontAwesomeIcon icon={faChevronRight } />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main