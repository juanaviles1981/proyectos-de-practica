import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function NavBar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">My Accesorios</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge bg="danger" pill className="ms-1">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
