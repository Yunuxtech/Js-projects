// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery");

const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
// clear button

clearBtn.addEventListener("click", clearItems);

// loading localstorage content on load event
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    // console.log(grocery.value);

    const value = grocery.value;
    const id = new Date().getTime().toString();
    // console.log(id);
    if (value && !editFlag) {
        // console.log("add items to stack");
        createListItem(id, value);



        // displaying message
        displayAlert("item added successful", "success");
        // displaying the container
        container.classList.add("show-container");
        addToLocalStorage(id, value);
        setBackToDefault();

    } else if (value && editFlag) {
        // console.log("editing the file");
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        // editing localstorage
        editLocalStorage(editID, value);
        setBackToDefault();

    } else {
        // console.log("the filed is empty");
        displayAlert("Enter a value", "danger");

    }

}
// alert function handler

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // removing the alert after the display
    setInterval(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);

    }, 1000);

}
// clear items

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("All items deleted", "danger");
    localStorage.removeItem("list");
    setBackToDefault();

}
// edit function
function deleteItem(e) {
    // console.log("item deleted");
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";


}

// delete function
// to default
function setBackToDefault() {
    // console.log("setting to default");
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";

}

function addToLocalStorage(id, value) {
    // console.log("add to local storage");
    const grocery = { id: id, value: value };
    let items = getLocalStorage();
    // console.log(items);
    items.push(grocery);

    localStorage.setItem("list", JSON.stringify(items));

}
// ****** LOCAL STORAGE **********

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function(item) {
        if (item.id !== id) {
            return item;

        }

    });
    localStorage.setItem("list", JSON.stringify(items));

}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function(item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;

    });
    localStorage.setItem("list", JSON.stringify(items));

}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

}
// localStorage api
// setItem
// getItem
// removeItem
// save as string

// localStorage.setItem("orange", JSON.stringify(["item1", "item2", "item3"]));
// const orange = JSON.parse(localStorage.getItem("orange"));
// console.log(orange);
// ****** SETUP ITEMS **********

function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function(item) {
            createListItem(item.id, item.value);

        });
        container.classList.add("show-container");

    }


}

function createListItem(id, value) {
    const element = document.createElement("article");
    // adding the grocery-item class
    element.classList.add("grocery-item");
    // adding id
    const attr = document.createAttribute("data-id");
    element.setAttributeNode(attr);
    attr.value = id;
    element.innerHTML = `<p class="title">${value }</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
        </div>`;

    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    // appendinf child

    list.appendChild(element);

}