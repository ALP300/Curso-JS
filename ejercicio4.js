let continuar;

do {
    let respuesta = prompt("¿Cuál es la capital de Francia?: "); //PARIS //lima
    if (respuesta.toLowerCase() === "paris") { //PARIS paris
        console.log("Correcto");
    } else {
        console.log("Incorrecto, La respuesta es Paris");
    }

    continuar = confirm("¿Desea continuar con otra pregunta?");
} while (continuar);