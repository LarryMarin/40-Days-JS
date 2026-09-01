/*
1. Create a form dynamically using JavaScript and manipulate its behavior
Add input fields dynamically based on user selection e.g., text, email, number
Add a submit button that logs all the input values as an object.
Add a reset button that clears the form.
Use createElement, appendChild, setAttribute, and addEventListener.
*/

const inputType = document.getElementById("inputType");
const form = document.getElementById("dynamicForm");
const button = document.getElementById("addFieldBtn");

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
form.appendChild(submitBtn);

let submitObj = {};

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll("input");
    inputs.forEach((element, index) => {
        submitObj[index] = element.value;
    })
    console.log(submitObj);
})

button.addEventListener("click", function(){
    const inputVal = inputType.value;
    const newInput = document.createElement("input");
    newInput.setAttribute("type", inputVal);
    form.appendChild(newInput);
})

const resetButton = document.createElement("button");
resetButton.setAttribute("type", "reset");
form.appendChild(resetButton);

resetButton.addEventListener("click", function(e) {
    e.preventDefault();
    form.reset();
})

/*
2. Add, delete, and search rows in a dynamic table
A form to add rows (Name, Age, Role).
Each row should have a “Delete” button to remove it.
Add a search input that filters the rows by name.
Use insertRow, deleteRow, and textContent/innerText.
*/

const rowName = document.createElement("input");
rowName.setAttribute("type", "text");
document.body.appendChild(rowName);

const rowAge = document.createElement("input");
rowAge.setAttribute("type", "number");
document.body.appendChild(rowAge);

const rowRole = document.createElement("input");
rowRole.setAttribute("type", "text");
document.body.appendChild(rowRole);

const addBtn = document.createElement("button");
addBtn.innerText = "Add Row"
document.body.appendChild(addBtn);

const newTable = document.createElement("table");
document.body.appendChild(newTable);

const search = document.createElement("input");
search.setAttribute("type", "search");
document.body.appendChild(search);

addBtn.addEventListener("click", function(){
    const newRow = newTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    cell4.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        newRow.remove();
    })

    cell1.innerText = rowName.value;
    cell2.innerText = rowAge.value;
    cell3.innerText = rowRole.value;
})

search.addEventListener("input", function() {
    const userInput = search.value;
    const allRows = newTable.querySelectorAll("tr");

    allRows.forEach((row) => {
        row.style.display = row.cells[0].innerText.toLowerCase().includes(userInput.toLowerCase()) ? "block" : "none"
    })
})





/*
3. Theme Switcher with Persistence
Toggle theme using a button or switch.
Persist the theme in localStorage and apply on page load.
Change background and text color based on the theme.
*/

function applyTheme(theme) {
  if (theme === 'black') {
    document.documentElement.style.backgroundColor = 'black';
    document.documentElement.style.color = 'white';
  } else {
    document.documentElement.style.backgroundColor = 'white';
    document.documentElement.style.color = 'black';
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

let currentTheme = document.documentElement.getAttribute('data-theme');
applyTheme(currentTheme);
const toggleBtn = document.createElement("button");

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", function (e){
    if(currentTheme === 'black'){
        applyTheme('white');
        currentTheme = 'white';
        localStorage.setItem('theme', 'white');
    }
    else{
        applyTheme('black');
        currentTheme = 'black';
        localStorage.setItem('theme', 'black');
    }
})








