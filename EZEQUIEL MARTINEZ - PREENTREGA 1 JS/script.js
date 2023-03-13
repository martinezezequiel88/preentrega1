// Algoritmo para anotar tareas pendientes.
let tareas = "";
let item;

do {
    item = prompt("Ingresa una tarea pendiente a realizar - Escribí ESC cuando termines");
    if (item != "ESC") {
        tareas = tareas + item + "\n";
    }
} while (item != "ESC");

console.log("Tienes estas tareas pendientes a realizar:");
console.log(tareas);


