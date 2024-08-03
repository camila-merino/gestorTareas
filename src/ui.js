// Importar la función para traer las tareas de LocalStorage
import { getTasks } from "./task";

// Función para visualizar las tareas
export const renderTask = () => {
const taskList = document.getElementById ("task-list");
taskList.innerHTML = "";
const tasks = getTasks ();
tasks.forEach((task) => {
const li = document.createElement("li");
li.setAttribute("data-id", task.id);

if(task.completed === true) {
    li.classList.add("completed");
}

li.innerHTML = `
${task.text}
<button class="delete"> Borrar </button>
<button class="toggle">  ${task.completed === true ? "Regresar" : "Completado" }   </button>
`;

taskList.appendChild(li);
});
};