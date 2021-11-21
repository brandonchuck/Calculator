// ---------- STATE VARIABLES ----------
let display = document.querySelector("#display");
let operand = "";
let num1 = "";
let num2 = "";

// ---------- DOM ELEMENTS ----------
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
    if (e.target.textContent === "." && num1.includes(".")) {
      return;
    } else {
      num1 += e.target.textContent;
      display.textContent = num1;
    }
  } else {
    if (e.target.textContent === "." && num2.includes(".")) {
      return;
    } else {
      display.textContent = "";
      num2 += e.target.textContent;
      display.textContent = num2;
    }
  }

  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}

// ---------- OPERANDS ----------
function operandPressed(e) {
  if (num1 === "") {
    alert("Please select a number");
  } else {
    if (e.target.textContent === operand && operand !== "") {
      operand = "";
    } else {
      operand = e.target.textContent;
    }
  }

  console.log("Current operand: " + operand);
}

// ---------- CALCULATION ----------
function equalsPressed() {
  let result = calculate(num1, num2, operand);
  num1 = result;
  num2 = "";
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

// ---------- RESET ----------
function clear() {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}
