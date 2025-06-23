import React, { useState } from "react";

const emojis = [
  { val: 1, icon: "😡" },
  { val: 2, icon: "😕" },
  { val: 3, icon: "😐" },
  { val: 4, icon: "😊" },
  { val: 5, icon: "😍" },
];

export default function EncuestaSatisfaccion({ onEnviar }) {
  const [satisfaccion, setSatisfaccion] = useState(null);
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = () => {
    setEnviado(true);
    onEnviar({ satisfaccion, comentario });
  };

  if (enviado) {
    return <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-4xl mb-2">🎉</div>
      <div className="text-lg font-bold mb-2">¡Gracias por tu opinión!</div>
      <div className="text-gray-500">Tu respuesta ha sido registrada.</div>
    </div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">¿Cómo fue tu experiencia?</h2>
      <div className="flex space-x-2 mb-4">
        {emojis.map(e => (
          <button
            key={e.val}
            className={`text-3xl ${satisfaccion === e.val ? 'scale-125' : ''}`}
            onClick={() => setSatisfaccion(e.val)}
          >{e.icon}</button>
        ))}
      </div>
      <textarea
        className="border rounded px-3 py-2 mb-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Comentario (opcional)"
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        rows={3}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        disabled={!satisfaccion}
        onClick={enviar}
      >Enviar</button>
    </div>
  );
} 