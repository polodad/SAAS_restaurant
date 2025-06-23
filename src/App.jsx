import React, { useState } from "react";
import Bienvenida from "./components/Bienvenida";
import MenuInteractivo from "./components/MenuInteractivo";
import ResumenGrupo from "./components/ResumenGrupo";
import EncuestaSatisfaccion from "./components/EncuestaSatisfaccion";
import BotonLlamarMesero from "./components/BotonLlamarMesero";

export default function App() {
  // Estados principales para navegación y datos
  const [pantalla, setPantalla] = useState("bienvenida");
  const [nombre, setNombre] = useState("");
  const [mesa, setMesa] = useState("");
  const [ordenes, setOrdenes] = useState([]); // [{nombre, items: [], total}]
  const [encuesta, setEncuesta] = useState(null);

  // Simulación de detección de mesa por URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMesa(params.get("mesa") || "1");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {pantalla === "bienvenida" && (
        <Bienvenida
          nombre={nombre}
          setNombre={setNombre}
          mesa={mesa}
          onContinuar={() => setPantalla("menu")}
        />
      )}
      {pantalla === "menu" && (
        <MenuInteractivo
          nombre={nombre}
          mesa={mesa}
          ordenes={ordenes}
          setOrdenes={setOrdenes}
          onVerResumen={() => setPantalla("resumen")}
        />
      )}
      {pantalla === "resumen" && (
        <ResumenGrupo
          ordenes={ordenes}
          onDividirCuenta={() => setPantalla("encuesta")}
        />
      )}
      {pantalla === "encuesta" && (
        <EncuestaSatisfaccion
          onEnviar={setEncuesta}
        />
      )}
      {/* Botón flotante siempre visible en menú y resumen */}
      {(pantalla === "menu" || pantalla === "resumen") && <BotonLlamarMesero />}
      {/* Opción de crear cuenta al final */}
      {pantalla === "encuesta" && (
        <div className="text-center mt-8">
          <button className="text-blue-600 underline">Crear cuenta</button>
        </div>
      )}
    </div>
  );
} 