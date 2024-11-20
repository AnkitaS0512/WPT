var name = document.getElementById("Name");
var nameError = document.getElementById("nameError");

function isNameEmpty() {
    if (name.value.trim() === "") {
        nameError.innerHTML = "Name is required";
    } else {
        nameError.innerHTML = "";
    }
}   