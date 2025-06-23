import React, { useState } from "react";

export default function BotonLlamarMesero() {
  const [llamando, setLlamando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const llamarMesero = () => {
    setLlamando(true);
    setMensaje("Mesero en camino 🚶‍♂️");
    setTimeout(() => {
      setLlamando(false);
      setMensaje("");
    }, 2500);
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg font-bold text-lg z-50 hover:bg-yellow-500 transition"
        onClick={llamarMesero}
        disabled={llamando}
      >
        {llamando ? "Llamando..." : "Llamar al mesero"}
      </button>
      {mensaje && (
        <div className="fixed bottom-24 right-6 bg-white border border-yellow-400 text-yellow-700 px-4 py-2 rounded shadow-lg z-50">
          {mensaje}
        </div>
      )}
    </>
  );
} 