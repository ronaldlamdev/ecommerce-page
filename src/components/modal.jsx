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
  return (
    <dialog open>
      <FontAwesomeIcon className="modal-close" icon={faClose} />
      <div className="modal-container">

        {/* Full size images */}
        <div className="modal-product-images-container">
          <img className="modal-img" src={ModalFullImg1} alt="modal pic" />
          <img className="modal-img" src={ModalFullImg2} alt="modal pic" hidden/>
          <img className="modal-img" src={ModalFullImg3} alt="modal pic" hidden/>
          <img className="modal-img" src={ModalFullImg4} alt="modal pic" hidden/>

          {/* Previous and Next functions */}
          <div className="modal-carousel-container">
            <div className="modal-left-chevron modal-chevron-container">
              <FontAwesomeIcon className="modal-chevron modal-previous" icon={faChevronLeft}/>
            </div>
            <div className="modal-right-chevron modal-chevron-container">
              <FontAwesomeIcon className="modal-chevron modal-next" icon={faChevronRight}/>
            </div>
          </div>
        </div>

        {/* Thumbnail images */}
        <div className="modal-thumbnail-images-container">
          <img className="modal-thumbnail" src={ModalThumbnail1} alt-="modal-thumbnail"></img>
          <img className="modal-thumbnail" src={ModalThumbnail2} alt-="modal-thumbnail"></img>
          <img className="modal-thumbnail" src={ModalThumbnail3} alt-="modal-thumbnail"></img>
          <img className="modal-thumbnail" src={ModalThumbnail4} alt-="modal-thumbnail"></img>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;