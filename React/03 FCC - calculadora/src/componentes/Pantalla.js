import React from "react";
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = ({input}) => (     /* Otra forma de definir un componente. es para compo sencillos */

    <div className="input">
        {input}
    </div>
);

export default Pantalla;