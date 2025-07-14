import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ReparacionesForm from "./components/ReparacionesForm";
import ReparacionesInforme from "./components/ReparacionesInforme";
import Navbar from "./components/Navbar";
import {VISTAS} from "./constants/vistas"
function App() {

  //Estado para mostrar el Hero al comienzo
  const [showHero, setShowHero] = useState(true);
  //Estado para mostrar formulario de carga o informe de trabajos
  const [vista, setVista] = useState(VISTAS.FORM);
  //Estado elevado para cargar reparaciones. Verifica que haya reparaciones
  //En el Local Storage
  const [reparaciones, setReparaciones] = useState(() => {
    const reparacionesGuardadas = localStorage.getItem("reparaciones");
    return reparacionesGuardadas ? JSON.parse(reparacionesGuardadas) : [];
  });

  // Estado de modo oscuro - Claro. Verifica si hay modo guardado en Local Storage
  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem("modoOscuro");
    return modoGuardado ? JSON.parse(modoGuardado) : false;
  });

  // Efecto para guardar reparaciones en localStorage cuando cambia el estado
  useEffect(() => {
    localStorage.setItem("reparaciones", JSON.stringify(reparaciones));
  }, [reparaciones]);

  // Efecto para guardar modo oscuro en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  const handleEnter = () => {
    setShowHero(false);
  };

  return (
    <>
      {showHero ? (
        <Hero onEnter={handleEnter} />
      ) : (
        <div className={modoOscuro ? "modo-oscuro" : ""}>
          <Navbar
            setVista={setVista}
            modoOscuro={modoOscuro}
            setModoOscuro={setModoOscuro}
          />

          {vista === VISTAS.FORM && (
            <ReparacionesForm
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
            />
          )}

          {vista === VISTAS.INFORME && (
            <ReparacionesInforme
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
