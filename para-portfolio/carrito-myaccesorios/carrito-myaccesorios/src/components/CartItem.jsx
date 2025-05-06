import React from 'react'

export default function CartItem({ product }) {
  return (
    <div className="flex justify-between border-b py-2">
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  )
}
