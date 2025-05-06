import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, name: 'Collar artesanal', price: 2500 },
  { id: 2, name: 'Pulsera de cuero', price: 1800 },
  { id: 3, name: 'Anillo ajustable', price: 2000 },
]

export default function ProductList({ onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
