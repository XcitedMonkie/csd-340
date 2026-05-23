// Array to store tasks
let todoList = [];

// Function to add item
function addItem() {

    let input = document.getElementById("itemInput");
    let item = input.value;

    if (item.trim() !== "") {

        todoList.push(item);

        alert(item + " was added to the array.");

        displayItems();

        input.value = "";
    }
    else {

        alert("Please enter a task.");
    }
}

// Function to delete last entry
function deleteLastEntry() {

    if (todoList.length > 0) {

        let removedItem = todoList.pop();

        alert(removedItem + " was deleted from the array.");

        displayItems();
    }
    else {

        alert("The array is empty.");
    }
}

// Function to delete selected item
function deleteSpecificItem() {

    let select = document.getElementById("deleteSelect");

    let index = select.value;

    if (index === "") {

        alert("Please select an item to delete.");

        return;
    }

    let removedItem = todoList.splice(index, 1)[0];

    alert(removedItem + " was deleted from the array.");

    displayItems();
}

// Function to sort items
function sortItems() {

    if (todoList.length > 0) {

        todoList.sort();

        alert("The array has been sorted.");

        displayItems();
    }
    else {

        alert("Nothing to sort.");
    }
}

// Function to display array contents
function displayItems() {

    let output = document.getElementById("output");

    let select = document.getElementById("deleteSelect");

    output.innerHTML = "";

    // Reset dropdown list
    select.innerHTML = '<option value="">Select item to delete</option>';

    for (let i = 0; i < todoList.length; i++) {

        output.innerHTML += (i + 1) + ". " + todoList[i] + "<br>";

        // Add item to dropdown
        select.innerHTML +=
            `<option value="${i}">${todoList[i]}</option>`;
    }
}