const alumnos = ["Juan", "Pedro", "Jose"];
console.log(alumnos)

alumnos.map((actual, index, todo) => {
    console.log(`el elemento actual es ${actual} cuyo indice es ${index} y hay un valor que no conozco para que sirve ${todo}`);
});

