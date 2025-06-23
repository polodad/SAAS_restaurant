import React, { useState } from "react";
import { menu } from "../data/menu";

export default function MenuInteractivo({ nombre, mesa, ordenes, setOrdenes, onVerResumen }) {
  const [categoria, setCategoria] = useState(menu[0].categoria);
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const agregarPlatillo = (item) => {
    setCarrito([...carrito, item]);
    setMensaje(`Agregado: ${item.nombre}`);
    setTimeout(() => setMensaje(""), 1200);
  };

  const agregarOrden = () => {
    if (carrito.length === 0) return;
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    setOrdenes([...ordenes.filter(o => o.nombre !== nombre), { nombre, items: carrito, total }]);
    setCarrito([]);
    setMensaje("Orden agregada");
    setTimeout(() => setMensaje(""), 1200);
  };

  const totalCarrito = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <h2 className="text-xl font-bold mb-2">Hola, {nombre} (Mesa {mesa})</h2>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {menu.map(cat => (
          <button
            key={cat.categoria}
            className={`px-3 py-1 rounded-full border ${categoria === cat.categoria ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setCategoria(cat.categoria)}
          >
            {cat.categoria}
          </button>
        ))}
      </div>
      <div>
        {menu.find(cat => cat.categoria === categoria).items.map(item => (
          <div key={item.id} className="bg-white rounded shadow p-3 mb-3 flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.nombre}</div>
              <div className="text-sm text-gray-500">{item.descripcion}</div>
              <div className="text-blue-600 font-bold">${item.precio}</div>
            </div>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              onClick={() => agregarPlatillo(item)}
            >Agregar a mi orden</button>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg flex flex-col items-center">
        <div className="mb-2 w-full max-w-md">
          <h3 className="font-bold mb-1">Mi carrito</h3>
          {carrito.length === 0 ? (
            <div className="text-gray-400">Aún no has agregado platillos.</div>
          ) : (
            <ul className="mb-2">
              {carrito.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span>{item.nombre}</span>
                  <span>${item.precio}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="font-bold">Total: ${totalCarrito}</div>
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition w-full max-w-md"
          disabled={carrito.length === 0}
          onClick={agregarOrden}
        >Agregar mi orden</button>
        <button
          className="mt-2 text-blue-600 underline"
          onClick={onVerResumen}
        >Ver resumen del grupo</button>
        {mensaje && <div className="mt-2 text-green-600 font-semibold">{mensaje}</div>}
      </div>
    </div>
  );
} 