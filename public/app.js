const addTask = () => {
    const taskValue = document.querySelector("#task").value;
    const taskList = document.querySelector("#list");
    const newTask = document.createElement("li");

    newTask.setAttribute("onclick", "removeTask(this)");
    newTask.setAttribute("class", "task");
    newTask.appendChild(document.createTextNode(taskValue));
    taskList.appendChild(newTask);

    document.querySelector("#task").value = "";
}
const removeTask = ( task ) => { task.parentNode.removeChild(task); };