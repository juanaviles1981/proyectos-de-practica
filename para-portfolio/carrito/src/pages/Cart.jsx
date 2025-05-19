import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>El carrito está vacío.</h3>
        <Button variant="primary" onClick={() => navigate('/')}>
          Volver a la tienda
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tu carrito</h2>
        <Button variant="link" onClick={() => navigate('/')}>
          ← Volver a la tienda
        </Button>
      </div>

      <ListGroup variant="flush">
        {cartItems.map(item => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center">
              <Col xs={3} md={2}>
                <img
                  src={item.image || '/fallback-image.png'}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </Col>
              <Col xs={5} md={6}>
                <h5>{item.name}</h5>
                <p>${item.price.toFixed(2)}</p>
                <div className="d-flex align-items-center">
                  <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button variant="outline-secondary" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
                </div>
              </Col>
              <Col xs={4} md={4} className="text-end">
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h4>Total: ${getTotal().toFixed(2)}</h4>
        <Button variant="outline-danger" size="sm" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
};

export default Cart;
