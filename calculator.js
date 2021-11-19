let display = document.querySelector("#display");

let operand = "";
let num1 = "";
let num2 = "";

// buttons
document.querySelector("#zero").addEventListener("click", numberPressed);
document.querySelector("#one").addEventListener("click", numberPressed);
document.querySelector("#two").addEventListener("click", numberPressed);
document.querySelector("#three").addEventListener("click", numberPressed);
document.querySelector("#four").addEventListener("click", numberPressed);
document.querySelector("#five").addEventListener("click", numberPressed);
document.querySelector("#six").addEventListener("click", numberPressed);
document.querySelector("#seven").addEventListener("click", numberPressed);
document.querySelector("#eight").addEventListener("click", numberPressed);
document.querySelector("#nine").addEventListener("click", numberPressed);
document.querySelector("#decimal").addEventListener("click", numberPressed);

document.querySelector("#add").addEventListener("click", operandPressed);
document.querySelector("#subtract").addEventListener("click", operandPressed);
document.querySelector("#divide").addEventListener("click", operandPressed);
document.querySelector("#multiply").addEventListener("click", operandPressed);
document.querySelector("#equals").addEventListener("click", equalsPressed);

document.querySelector("#clear").addEventListener("click", clear);

// ---------- NUMBERS ----------
function numberPressed(e) {
  if (operand === "") {
    // incomplete logic
    if (num1.substring(-1) === ".") {
      // need logic for preventing multiple decimal points after a number; do not want 9.. + 3..
    }

    num1 += e.target.textContent;
    display.textContent = num1;
  } else {
    display.textContent = ""; // reset display
    num2 += e.target.textContent;
    display.textContent = num2;
  }

  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}

// ---------- OPERANDS ----------
function operandPressed(e) {
  // check if user entered a number first before selecting an operand
  if (num1 === "") {
    alert("Please select a number");
  } else {
    // if user clicks the same operand, toggle it off
    if (e.target.textContent === operand && operand !== "") {
      operand = "";
    } else {
      operand = e.target.textContent;
    }
  }

  console.log("Current operand: " + operand);
}

// ---------- CALCULATE ----------
function equalsPressed() {
  let result = calculate(num1, num2, operand);
  num1 = result; // update value of num1
  num2 = ""; // reset num2
  operand = "";
  display.textContent = result;
}

function calculate(num1, num2, operand) {
  switch (operand) {
    case "+":
      return (parseFloat(num1) + parseFloat(num2)).toFixed(3);
    case "-":
      return (parseFloat(num1) - parseFloat(num2)).toFixed(3);
    case "*":
      return (parseFloat(num1) * parseFloat(num2)).toFixed(3);
    case "/":
      return (parseFloat(num1) / parseFloat(num2)).toFixed(3);
  }
}

function displayValue(num) {
  if (display.textContent !== 0) {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function clear() {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}
