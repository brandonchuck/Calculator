// ---------- STATE VARIABLES ----------
let display = document.querySelector("#display");
let operand = "";
let num1 = "";
let num2 = "";
let memory = "";

// ----- DOM ELEMENTS -----
// Numbers
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

// Operands
document.querySelector("#add").addEventListener("click", operandPressed);
document.querySelector("#subtract").addEventListener("click", operandPressed);
document.querySelector("#divide").addEventListener("click", operandPressed);
document.querySelector("#multiply").addEventListener("click", operandPressed);
document.querySelector("#inverse").addEventListener("click", operandPressed);
document
  .querySelector("#square-root")
  .addEventListener("click", operandPressed);

// Memory
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

// Misc.
document.querySelector("#sign").addEventListener("click", changeSign);
document.querySelector("#equals").addEventListener("click", equalsPressed);
document.querySelector("#clear").addEventListener("click", clear);

// ---------- NUMBERS ----------
function numberPressed(e) {
  if (e.target.textContent === "." && display.textContent.includes(".")) {
    return;
  }

  if (operand === "") {
    num1 += e.target.textContent;
    display.textContent = num1;
  } else {
    num2 += e.target.textContent;
    display.textContent = num2;
  }

  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
}

// ---------- OPERANDS ----------
function operandPressed(e) {
  if (num1 === "") {
    alert("Please enter a number.");
  } else {
    if (num2 !== "") {
      // e.target.classList.toggle("active"); // testing showing active operand
      let result = calculate(num1, num2, operand);
      num1 = result;
      operand = e.target.textContent;
      display.textContent = result;
      num2 = "";
      console.log("num1 = " + num1);
      console.log("num2 = " + num2);
    } else {
      // e.target.classList.toggle("active");
      console.log("Class List: " + e.target.classList);
      operand = e.target.textContent;
    }
  }

  console.log("Current operand: " + operand);
}

// ---------- CALCULATION ----------
function equalsPressed() {
  let result = calculate(num1, num2, operand);
  num1 = "";
  num2 = "";
  operand = "";
  display.textContent = result;

  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  console.log("Current operand: " + operand);
  console.log("Current memory: " + memory);
}

function calculate(num_1, num_2, operand) {
  if (num_1.includes(".") || num_2.includes(".")) {
    num1 = parseFloat(parseFloat(num_1).toFixed(4));
    num2 = parseFloat(parseFloat(num_2).toFixed(4));
  } else {
    num1 = parseFloat(num_1);
    num2 = parseFloat(num_2);
  }

  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "sqrt":
      return Math.sqrt(num1).toFixed(4);
    case "1/x":
      return (1 / num1).toFixed(4);
  }
}

function changeSign() {
  if (num2 === "") {
    num1 = num1.includes("-") ? num1.replace("-", "") : "-" + num1;
    display.textContent = num1;
  } else {
    num2 = num2.includes("-") ? num2.replace("-", "") : "-" + num2;
    display.textContent = num2;
  }
}

// ---------- MEMORY FUNCTIONS ----------
function memoryClear() {
  memory = "";
  console.log("Current memory: " + memory);
}

function memoryRecall() {
  if (memory === "") {
    display.textContent = 0;
    alert("Nothing stored in memory... enter a number then press MS to store");
    return;
  }

  if (operand !== "") {
    num2 = memory;
  } else {
    display.textContent = memory;
  }
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  console.log("Current memory: " + memory);
}

function memoryAddSubtract(e) {
  if (memory !== "") {
    let op = e.target.textContent === "M+" ? "+" : "-";
    let result;

    // cleaner way to write this logic?
    if (num1 !== "" && num2 === "") {
      result = calculate(memory, num1, op);
      console.log("hi");
    }

    if (num2 !== "") {
      result = calculate(memory, num2, op);
      console.log("there");
    }

    memory = result;
    console.log("Current memory: " + memory);
  } else {
    alert("Nothing stored in memory... enter a number then press MS to store.");
    return;
  }
}

function memoryStore() {
  if (num1 === "") {
    alert("Please enter a number, then click MS to store.");
  }

  // cleaner way to write this logic?
  // if num1 has been entered and user presses MS
  if (num1 !== "" && num2 === "") {
    memory = num1;
    console.log("Current memory: " + memory);
  }
  // if user has entered num1 and num2 and wants to store num2 in memory
  else if (num1 !== "" && num2 !== "") {
    memory = num2;
    console.log("Current memory: " + memory);
  }

  // -- original logic --
  // if (num1 !== "") {
  //   memory = num1;
  //   console.log("Current memory: " + memory);
  // } else {
  //   alert("Please enter a number, then click MS to store.");
  // }
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
