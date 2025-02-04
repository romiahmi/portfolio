// Nav Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


// Dark Mode 
const toggleSwitch = document.getElementById('darkModeToggle');
const img = document.getElementById('logoImage'); // Ensure you have an element with id 'logoImage'

// Load the user's preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
        img.src = "Images/logo_new.png"; // Change image based on dark mode
    } else {
        img.src = "Images/logo_new.png"; // Default image
    }
});

// Toggle dark mode and image based on switch
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        img.src = "Images/logo_white.png"; // Change image when dark mode is enabled
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        img.src = "Images/logo_new.png"; // Change image when dark mode is disabled
    }
});





// const todoinput = document.getElementById("todo-input");
// const todolist = document.getElementById("todo-list");

// // To save input data in array
// let todolists = [];

// // Load data from local storage when the page loads
// window.onload = function () {
//     showList();
// };

// function addtodo() {
//     if (todoinput.value === "") {
//         let alert = document.getElementById("todo-input");
//         alert.classList.add("alert");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = todoinput.value;
//         todolist.appendChild(li);
//         todolists.push(todoinput.value); // Add input value to array
//         saveData(); // Save updated array to local storage
//     }

//     todoinput.value = ""; // Clear input field after adding
// }

// document.getElementById("todo-btn").addEventListener("click", function () {
//     addtodo(); // Directly call addtodo function on button click
// });

// // Storage data save
// function saveData() {
//     // Save the array as a JSON string in localStorage
//     localStorage.setItem("data", JSON.stringify(todolists));
// }

// // Display the todo list from localStorage
// function showList() {
//     // Retrieve the stored data from localStorage
//     let storedData = localStorage.getItem("data");

//     // If data exists in localStorage, parse and display it
//     if (storedData) {
//         todolists = JSON.parse(storedData); // Parse the JSON back into an array

//         todolists.forEach(function (todo) {
//             let li = document.createElement("li");
//             li.innerHTML = todo;
//             todolist.appendChild(li);
//         });
//     }
// }