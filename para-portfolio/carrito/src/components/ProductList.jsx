import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import CustomToast from './CustomToast';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastProduct, setToastProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastProduct(product.name);
    setShowToast(true);
  };

  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="mb-2 text-muted">${product.price.toFixed(2)}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                  className="mt-auto"
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomToast 
        show={showToast} 
        onClose={() => setShowToast(false)} 
        productName={toastProduct}
      />
    </>
  );
};

export default ProductList;
