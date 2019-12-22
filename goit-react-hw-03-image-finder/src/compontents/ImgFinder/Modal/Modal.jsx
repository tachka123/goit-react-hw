import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ large, onCloseModal }) => {
  return ReactDOM.createPortal(
    <div onClick={onCloseModal} role="presentation" className={style.Overlay}>
      <div className={style.Modal}>
        <img src={large} alt="" />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
