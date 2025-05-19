import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Store from './pages/Store';
import CartPage from './pages/Cart';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
