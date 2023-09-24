import React from 'react';
import styles from './styles.module.css'; 

const Modal = ({ children, onClose }) => {

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className={styles.modal_overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        {children}
        <div className={styles.button_wrapper}>
        <button className={styles.close_button} onClick={onClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
