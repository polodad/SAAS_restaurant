import React from "react";

export default function ResumenGrupo({ ordenes, onDividirCuenta }) {
  const totalGrupal = ordenes.reduce((acc, o) => acc + (o.total || 0), 0);

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <h2 className="text-xl font-bold mb-4">Resumen del grupo</h2>
      {ordenes.length === 0 ? (
        <div className="text-gray-500">Aún no hay órdenes agregadas.</div>
      ) : (
        <ul className="mb-4">
          {ordenes.map((o, idx) => (
            <li key={idx} className="mb-2 bg-white rounded shadow p-3">
              <div className="font-semibold">{o.nombre}</div>
              <ul className="text-sm text-gray-600 mb-1">
                {o.items.map((item, i) => (
                  <li key={i}>{item.nombre} - ${item.precio}</li>
                ))}
              </ul>
              <div className="font-bold">Total: ${o.total}</div>
            </li>
          ))}
        </ul>
      )}
      <div className="font-bold text-lg mb-4">Total grupal: ${totalGrupal}</div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition w-full"
        onClick={onDividirCuenta}
      >Dividir cuenta</button>
    </div>
  );
} 