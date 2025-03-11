//Inputs
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

//Parrafos
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizar texto de los p
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;


function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Actualizar inputs
// inputRojo.addEventListener('change', (e) => { // e es el objeto del evento
//     rojo = e.target.value;
//     textoRojo.innerText = rojo;
//     actualizarColor(rojo, verde, azul);
// });

inputRojo.addEventListener('change', () => { 
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});


inputVerde.addEventListener('change', () => { 
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => { // e es el objeto del evento
    azul = inputAzul.value;
    textoRojo.innerText = azul;
    actualizarColor(rojo, verde, azul);
});