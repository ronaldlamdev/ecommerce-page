import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalFullImg1 from '../images/image-product-1.jpg';
import ModalFullImg2 from '../images/image-product-2.jpg';
import ModalFullImg3 from '../images/image-product-3.jpg';
import ModalFullImg4 from '../images/image-product-4.jpg';
import ModalThumbnail1 from '../images/image-product-1-thumbnail.jpg';
import ModalThumbnail2 from '../images/image-product-2-thumbnail.jpg';
import ModalThumbnail3 from '../images/image-product-3-thumbnail.jpg';
import ModalThumbnail4 from '../images/image-product-4-thumbnail.jpg';


const Modal = () => {

  // Closes Modal
  const closeModal = () => {
    const modal = document.getElementById('modal');

    if (window.innerWidth >= 1200) {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    }
  }

  // Change image when clicking on the carousel buttons
  let numModal = 0;

  const prevModalImage = () => {
    numModal--;
    let modalSlider = document.getElementById('modal-slider');
    let modalProductImages = [ModalFullImg1, ModalFullImg2, ModalFullImg3, ModalFullImg4];
    if (numModal < 0) {
      numModal = modalProductImages.length - 1;
    } modalSlider.src = modalProductImages[numModal];
  }

  const nextModalImage = () => {
    numModal++;
    let modalSlider = document.getElementById('modal-slider');
    let modalProductImages = [ModalFullImg1, ModalFullImg2, ModalFullImg3, ModalFullImg4];
    if (numModal >= modalProductImages.length) {
      numModal = 0;
    } modalSlider.src = modalProductImages[numModal];
  }

  // Thumbnail functions to display different modal product images
  
  const modalThumbnailViewer1 = () => {
    let modalFullImage = document.getElementById('modal-slider');
    modalFullImage.src = ModalFullImg1;
  }

  const modalThumbnailViewer2 = () => {
    let modalFullImage = document.getElementById('modal-slider');
    modalFullImage.src = ModalFullImg2;
  }

  const modalThumbnailViewer3 = () => {
    let modalFullImage = document.getElementById('modal-slider');
    modalFullImage.src = ModalFullImg3;
  }

  const modalThumbnailViewer4 = () => {
    let modalFullImage = document.getElementById('modal-slider');
    modalFullImage.src = ModalFullImg4;
  }

  return (
    <section id="modal" className="modal">
      <div className="modal-container">

        {/* Full size images */}
        <div className="modal-product-images-container">
          {/* Modal Close Icon */}
          <FontAwesomeIcon onClick={closeModal} className="modal-close" icon={faClose} />
          <img id="modal-slider" className="modal-img" src={ModalFullImg1} alt="modal pic" />

          {/* Previous and Next functions */}
          <div className="modal-carousel-container">
            <div className="modal-left-chevron modal-chevron-container">
              <FontAwesomeIcon onClick={prevModalImage} className="modal-chevron modal-previous" icon={faChevronLeft}/>
            </div>
            <div className="modal-right-chevron modal-chevron-container">
              <FontAwesomeIcon onClick={nextModalImage} className="modal-chevron modal-next" icon={faChevronRight}/>
            </div>
          </div>
      </div>

        {/* Thumbnail images */}
        <div className="modal-thumbnail-images-container">
          <img className="modal-thumbnail active" onClick={modalThumbnailViewer1} src={ModalThumbnail1} alt="thumbnail"/>
          <img className="modal-thumbnail" onClick={modalThumbnailViewer2} src={ModalThumbnail2} alt="thumbnail"/>
          <img className="modal-thumbnail" onClick={modalThumbnailViewer3} src={ModalThumbnail3} alt="thumbnail"/>
          <img className="modal-thumbnail" onClick={modalThumbnailViewer4} src={ModalThumbnail4} alt="thumbnail"/>
        </div>
      </div>
    </section>
  )
}

export default Modal;