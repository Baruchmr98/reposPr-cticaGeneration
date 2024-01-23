var formulario = document.querySelector(".formulario");

//Se crea una función para que cuando se llenen los campos del formulario, al final, se ejecute otra función que despliegue la 'Lista de invitados'
formulario.onsubmit = function(e) {

  e.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;
  var indiceNacionalidad = na.selectedIndex;
  var nacionalidad = na.options[indiceNacionalidad].value;

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }
  if (
    nombre.length > 0 &&
    (edad > 18 && edad < 120)
  ) {
    agregarInvitado(nombre, edad, nacionalidad); //Se ejecuta la función que muestra a los invitados en tarjetitas.
  }
};

// Se crea la función que agrega a los invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {

  var nacionalidadMap = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Se llama la función con los parámetros que definen el interior de las tarjetitas que presentan a los invitados
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidadMap[nacionalidad]);

  //Se crea el botón para eliminar invitados de la lista
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Se asigan un evento para el botón que elimina a los invitados
  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}