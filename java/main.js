let personas = []; // Array donde se guardan los registros

// Función para registrar una persona
function registrarPersona(nombre, edad, correo) {
  if (edad < 18) {
    alert( nombre + " no puede registrarse (menor de edad).");
    console.log("Intento fallido: " + nombre + " es menor de edad.");
    return;
  }

  // Validar que no se repita el correo
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].correo === correo) {
      alert(" Ya existe una persona registrada con ese correo.");
      console.log("Correo duplicado: " + correo);
      return;
    }
  }

  const persona = { nombre, edad, correo };
  personas.push(persona);

  alert( nombre + " fue registrado correctamente.\nTotal de personas registradas: " + personas.length);
  console.log("Registro exitoso:", persona);
  console.log("Cantidad actual de personas registradas:", personas.length);
}

// Función para mostrar la lista de personas

function mostrarRegistros() {
  if (personas.length === 0) {
    alert(" No hay personas registradas.");
    console.log("No hay personas registradas.");
  } else {
    let mensaje = " Lista de personas registradas:\n\n";
    console.log(" LISTA DE PERSONAS REGISTRADAS ");
    for (let i = 0; i < personas.length; i++) {
      const p = personas[i];
      mensaje += (i + 1) + ". " + p.nombre + " | Edad: " + p.edad + " | Email: " + p.correo + "\n";
      console.log((i + 1) + ". " + p.nombre + " | Edad: " + p.edad + " | Email: " + p.correo);
    }
    mensaje += "\n Total: " + personas.length + " personas registradas.";
    alert(mensaje);
    console.log("Total de registros:", personas.length);
  }
}

// Función para buscar una persona por nombre

function buscarPersona(nombreBuscado) {
  let encontrada = false;

  for (let i = 0; i < personas.length; i++) {
    if (personas[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      alert(" Persona encontrada:\n" + 
            personas[i].nombre + " (" + personas[i].edad + " años)\nEmail: " + personas[i].correo);
      console.log("Persona encontrada:", personas[i]);
      encontrada = true;
      break;
    }
  }

  if (!encontrada) {
    alert(" No se encontró ninguna persona con ese nombre.");
    console.log("Búsqueda sin resultados para:", nombreBuscado);
  }
}

// Función principal del simulador
function iniciarSimulador() {
  alert(" Bienvenido al sistema Xeneize de registro de personas ");
  console.log(" SISTEMA INICIADO ");

  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      "Seleccione una opción:\n" +
      "1️ Registrar persona\n" +
      "2️ Ver registros\n" +
      "3️ Buscar persona\n" +
      "4️ Salir"
    );

    switch (opcion) {
      case "1":
        let nombre = prompt("Ingrese el nombre:");
        let edad = parseInt(prompt("Ingrese la edad:"));
        let correo = prompt("Ingrese el correo electrónico:");
        registrarPersona(nombre, edad, correo);
        break;

      case "2":
        mostrarRegistros();
        break;

      case "3":
        let buscar = prompt("Ingrese el nombre de la persona que desea buscar:");
        buscarPersona(buscar);
        break;

      case "4":
        alert("👋 Gracias por usar el sistema Xeneize. ¡Hasta pronto!");
        console.log("Sistema finalizado por el usuario.");
        continuar = false;
        break;

      default:
        alert("⚠️ Opción no válida. Intente nuevamente.");
        console.log("Entrada inválida del usuario.");
    }
  }
}


document.getElementById("iniciarBtn").addEventListener("click", iniciarSimulador);
