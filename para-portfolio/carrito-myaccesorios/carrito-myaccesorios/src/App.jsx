import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Mi Tienda de Accesorios</h1>
      <ProductList onAddToCart={addToCart} />
      <Cart items={cartItems} />
    </div>
  )
}
