import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CustomToast = ({ show, onClose, productName }) => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast 
        onClose={onClose} 
        show={show} 
        delay={2000} 
        autohide 
        bg="success"
      >
        <Toast.Header>
          <strong className="me-auto">Producto agregado</strong>
        </Toast.Header>
        <Toast.Body>
          {productName} fue agregado al carrito.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
