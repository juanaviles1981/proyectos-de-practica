import React from 'react';
import '../hojas-de-estilo/Boton.css';

// function Boton(props){
//   return (
//     <button>
//       {props.texto}
//     </button>
//   );
// }

function Boton({texto, esBotonDeClic, manejarClic}){ //sintaxis de desestructuracion
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;
