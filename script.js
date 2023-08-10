

function agregarTarea(){

    // Deifine las variables que vamos a usar
var entradaTarea = document.getElementById("tareaInput");
var listaTareas = document.getElementById("listaTareas");

// toma el valor de lo que escribiste
var textoTarea = entradaTarea.value;

//si esta vacio no hace nada
    if( textoTarea === "" ){return};

//creacion de la tarea
   var nuevaTarea = document.createElement("li");
   nuevaTarea.textContent = textoTarea;
   nuevaTarea.classList.add("nuevaTarea");
   listaTareas.appendChild(nuevaTarea);
   entradaTarea.value = "";

//Crear Boton eliminar
   var botonEliminar = document.createElement("button");
   botonEliminar.textContent = "X";
   botonEliminar.classList.add("botonEliminar");
   nuevaTarea.appendChild(botonEliminar);

//Se elimina la tarea
   botonEliminar.addEventListener("click", function (){
    nuevaTarea.remove();
   })

}