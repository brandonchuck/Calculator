let display = document.querySelector("#display");

let operandFlag = false;

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

document.querySelector("#add").addEventListener("click", operandPressed);
document.querySelector("#subtract").addEventListener("click", operandPressed);
document.querySelector("#divide").addEventListener("click", operandPressed);
document.querySelector("#multiply").addEventListener("click", operandPressed);
document.querySelector("#equals").addEventListener("click", equalsPressed);

document.querySelector("#clear").addEventListener("click", clear);

// ---------- NUMBERS ----------
function numberPressed(e) {
  console.log("Current flag: " + operandFlag);
  chooseNumber(e.target.textContent); // assign value to num1
  displayValue(e.target.textContent); // display num1 in screen
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}

function chooseNumber(num) {
  if (!operandFlag) {
    num1 += num;
  } else {
    display.textContent = ""; // reset display
    num2 += num;
  }
}

// ---------- OPERANDS ----------
function operandPressed(e) {
  // operandFlag = operandFlag ? false : true;

  // if user clicks same operand, the operandFlag is toggled to false
  if (e.target.textContent === operand && operand !== "") {
    operandFlag = false;
    operand = "";
  } else {
    operandFlag = true;
    operand = e.target.textContent;
  }

  // console.log(e.target.textContent);
  console.log("Current operand: " + operand);
  console.log(operandFlag);
}

// ---------- CALCULATE ----------
function equalsPressed() {
  new_num1 = calculate(num1, num2, operand);

  num1 = new_num1; // update value of num1
  num2 = "";
  display.textContent = num1;
  resetOperand();
}

function calculate(num1, num2, operand) {
  switch (operand) {
    case "+":
      return parseFloat(num1) + parseFloat(num2);
    case "-":
      return parseFloat(num1) - parseFloat(num2);
    case "*":
      return parseFloat(num1) * parseFloat(num2);
    case "/":
      return parseFloat(num1) / parseFloat(num2);
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
  operandFlag = false;
  num1 = "";
  num2 = "";
}

function resetOperand() {
  operandFlag = false;
  operand = "";
}
