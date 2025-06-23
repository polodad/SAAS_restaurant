import React from "react";

export default function Bienvenida({ nombre, setNombre, mesa, onContinuar }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido!</h1>
      <p className="mb-2 text-gray-600">Mesa detectada: <span className="font-semibold">{mesa}</span></p>
      <input
        className="border rounded px-4 py-2 mb-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        disabled={!nombre}
        onClick={onContinuar}
      >
        Continuar
      </button>
    </div>
  );
} 