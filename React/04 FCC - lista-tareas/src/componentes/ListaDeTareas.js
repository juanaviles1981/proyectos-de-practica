// Este componente contiene formulario y tareas

import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //filtra, no modifica array
    setTareas(tareasActualizadas); //aca se modifica el array
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id){
            tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    // Fragmentos en React, para no crear un contenedor adicional
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      
      <div className="tareas-lista-contenedor">
        {
        tareas.map((tarea) => (
          <Tarea 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto} 
          completada={tarea.completada}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea} />
        ))
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
