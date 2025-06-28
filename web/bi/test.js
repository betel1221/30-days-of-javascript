// 1. Function without parameters
function sayHello() {
  document.getElementById("output").textContent = "Hello from a function!";
}

// 2. Function with parameter
function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    document.getElementById("output").textContent = "Please enter your name.";
  } else {
    document.getElementById("output").textContent = "Hello, " + name + "!";
  }
}

// 3. Function that returns a value
function addNumbers() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("output").textContent = "Please enter valid numbers.";
  } else {
    let result = add(a, b); // calling the reusable function
    document.getElementById("output").textContent = "The sum is: " + result;
  }
}

function add(x, y) {
  return x + y;
}
