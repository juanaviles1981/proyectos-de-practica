const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
  if (input.value) {
    //crear tarea
    let tareaPrueba = document.createElement("div");
    tareaPrueba.classList.add("prueba");

    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    //texto ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //iconos crear y agregar
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    //iconos
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregar tarea
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert("Por favor ingrese una tarea");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode; //obtiene el objeto del evento
  tarea.classList.toggle("completada");
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", agregarTarea);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});
