console.log("Project: TODO");

//when user presses the button we have to take their input. using their input we have to push a new list onto the ul
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;//gives me the task the user gave me through the input

    if(task.trim() === "") return;

    const li = document.createElement("li");

    li.innerText = task;

    const completeButton = document.createElement("button");
    completeButton.innerText = "✅";
    completeButton.style.marginLeft="5px";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    }

    li.append(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.style.marginLeft="5px";
    //deleteButton.classList.add() to add a class and then go to the css file and add a class to do the styling
    //we can either create the function for deletebutton onclick inline (the same line) (also known as a annonymous function) with a function with no name or we can create a function outside with a name. 
    //but since we wont be using deletebutton anywhere else it is better to do it inline
    deleteButton.onclick = function() {
        li.remove();
    }
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    //add edit button before delete. it will make   
}

function filterTasks() {
    
}