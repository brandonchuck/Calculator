// ---------- STATE VARIABLES ----------
let display = document.querySelector("#display");
let operand = "";
// let lastOperand = ""; // testing with equalsPressed()
let num1 = "";
let num2 = "";
let memory = "";

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
document.querySelector("#inverse").addEventListener("click", operandPressed);
document
  .querySelector("#square-root")
  .addEventListener("click", operandPressed);
document.querySelector("#equals").addEventListener("click", equalsPressed);

document.querySelector("#memory-clear").addEventListener("click", memoryClear);

document
  .querySelector("#memory-recall")
  .addEventListener("click", memoryRecall);

document
  .querySelector("#memory-add")
  .addEventListener("click", memoryAddSubtract);
document
  .querySelector("#memory-subtract")
  .addEventListener("click", memoryAddSubtract);

document.querySelector("#memory-store").addEventListener("click", memoryStore);

document.querySelector("#clear").addEventListener("click", clear);

// ---------- NUMBERS ----------
function numberPressed(e) {
  // operand NOT selected
  if (operand === "") {
    // decimal pressed
    if (e.target.textContent === ".") {
      // check if num1 contains "." -- can only have 1 decimal point
      if (num1.includes(".")) {
        return;
      } else {
        num1 += e.target.textContent;
      }
    }
    // number pressed
    /*
      Current Bug:
      Expected: 3+5=8 --> press 4 --> num1 set to 4 and displays 4
      Actual: 3+5=8 --> press 4 --> num1 set to 84 and displays 84, not 4
      */
    else {
      num1 += e.target.textContent;
    }
    display.textContent = num1;
  }

  // operand selected
  else {
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
    alert("Please enter a number.");
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
  /* 
    *** This functionality may be unecessary... ***
    Current Bug:
    Actual: 3+5=8 --> press "+" --> press "=" --> num1 set to NaN, display shows NaN 
    Expected: 3+5=8 --> press "+" --> press "=" --> num1 set to 16 
  */
  // let result;

  // if (num2 === "") {
  //   console.log(num1); // --> this is being set to undefined?
  //   result = calculate(num1, num1, lastOperand); // calculate result using num1's val for num2

  //   // to reach here, user must have pressed an operator and
  // } else {
  //   lastOperand = operand;
  //   result = calculate(num1, num2, operand); // calculate result using user input;

  //   console.log("\nLast operand: " + lastOperand);
  //   console.log("Current operand: " + operand);
  // }

  // num1 = result;
  // num2 = "";
  // operand = "";
  // display.textContent = result;
  // console.log(result);

  // -- orignal logic --
  let result = calculate(num1, num2, operand);
  num1 = result;
  num2 = "";
  operand = "";
  display.textContent = result;

  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  console.log("Current operand: " + operand);
  console.log("Current memory: " + memory);
}

function calculate(num1, num2, operand) {
  switch (operand) {
    case "+":
      return (parseFloat(num1) + parseFloat(num2)).toFixed(4);
    case "-":
      return (parseFloat(num1) - parseFloat(num2)).toFixed(4);
    case "*":
      return (parseFloat(num1) * parseFloat(num2)).toFixed(4);
    case "/":
      return (parseFloat(num1) / parseFloat(num2)).toFixed(4);
    case "sqrt":
      return Math.sqrt(parseFloat(num1)).toFixed(4);
    case "1/x":
      return (1 / parseFloat(num1).toPrecision(20)).toFixed(4);
  }
}

// ---------- MEMORY FUNCTIONS ----------
function memoryClear() {
  memory = "";
}

function memoryRecall() {
  if (memory === "") {
    display.textContent = 0;
  } else {
    display.textContent = memory;
  }
  console.log("Current memory: " + memory);
}

function memoryAddSubtract(e) {
  if (memory !== "") {
    op = e.target.textContent === "M+" ? "+" : "-";
    let result = calculate(memory, num1, op);
    memory = result;
    console.log("Current memory: " + memory);
    operand = "";
  } else {
    alert("Nothing stored in memory... enter a number then press MS to store.");
    return;
  }
}

function memoryStore() {
  if (num1 !== "") {
    memory = num1;
    console.log("Current memory: " + memory);
  } else {
    alert("Please enter a number, then click MS to store.");
  }
}

// ---------- RESET ----------
function clear() {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  operand = "";
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}
