import { useState } from "react";

const productosIniciales = [
  {
    id: 1,
    nombre: "Collar de amatista",
    precio: 1200,
    categoria: "collares",
    material: "amatista",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nombre: "Aros de plata y perla",
    precio: 950,
    categoria: "aros",
    material: "plata",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nombre: "Pulsera de cuero y dije",
    precio: 700,
    categoria: "pulseras",
    material: "cuero",
    imagen: "https://via.placeholder.com/150"
  }
];

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Tienda de Bijouterie</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosIniciales.map((producto) => (
          <div key={producto.id} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
            <img src={producto.imagen} alt={producto.nombre} className="mb-3 w-full h-36 object-cover rounded" />
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-500">${producto.precio}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="mt-3 bg-pink-500 hover:bg-pink-600 text-white py-1 px-4 rounded-full text-sm transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10">Carrito</h2>
      <ul className="mt-2 space-y-1 text-gray-700">
        {carrito.map((item, index) => (
          <li key={index}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
