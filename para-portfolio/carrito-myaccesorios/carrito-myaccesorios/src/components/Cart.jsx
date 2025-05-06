import React from 'react'
import CartItem from './CartItem'

export default function Cart({ items }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Carrito</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        items.map((item, index) => (
          <CartItem key={index} product={item} />
        ))
      )}
    </div>
  )
}
