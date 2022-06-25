import React from "react";
import CloseModal from '../images/icon-close.svg';

const Modal = () => {
  return (
    <dialog open>
      <img src={CloseModal} alt="close modal" />
      <div className="modal-container"></div>
    </dialog>
  )
}