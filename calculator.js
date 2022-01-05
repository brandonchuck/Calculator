let display = document.querySelector("#display");
let operand = "";
let num1 = "";
let num2 = "";
let memory = "";
let result;

const numberBtns = document.querySelectorAll(".number-btns");
numberBtns.forEach((button) => button.addEventListener("click", numberPressed));

const operatorBtns = document.querySelectorAll(".operator-btns");
operatorBtns.forEach((button) =>
  button.addEventListener("click", operatorPressed)
);

const memoryBtns = document.querySelectorAll(".memory-btns");
memoryBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "MC":
        memory = "";
        break;
      case "MR":
        memoryRecall();
        break;
      case "M+":
      case "M-":
        memoryAddSubtract(e);
        break;
      case "MS":
        memoryStore();
        break;
    }
  });
});

function numberPressed(e) {
  if (e.target.textContent === "." && display.textContent.includes(".")) return;

  if (!operand) {
    num1 += e.target.textContent;
    display.textContent = num1;
  } else {
    num2 += e.target.textContent;
    display.textContent = num2;
  }
}

function operatorPressed(e) {
  if (!num1) {
    alert("Please enter a number.");
  }

  if (num2) {
    num1 = calculate(num1, num2, operand);
    operand = e.target.textContent;
    display.textContent = num1;
    num2 = "";
  }

  operand = e.target.textContent;
}

document.querySelector("#equals").addEventListener("click", equalsPressed);
function equalsPressed() {
  num1 = calculate(num1, num2, operand);
  num2 = "";
  operand = "";
  display.textContent = num1;
}

function calculate(num_1, num_2, operand) {
  if (num_1.toString().includes(".") || num_2.toString().includes(".")) {
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
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "sqrt":
      return Math.sqrt(num1).toFixed(4);
    case "1/x":
      return (1 / num1).toFixed(4);
  }
}

document.querySelector("#sign").addEventListener("click", changeSign);
function changeSign() {
  if (!num2) {
    num1 = num1.includes("-") ? num1.replace("-", "") : "-" + num1;
    display.textContent = num1;
  } else {
    num2 = num2.includes("-") ? num2.replace("-", "") : "-" + num2;
    display.textContent = num2;
  }
}

function memoryRecall() {
  if (!memory) {
    display.textContent = 0;
    alert("Nothing stored in memory... enter a number then press MS to store");
    return;
  }

  if (!num1) {
    num1 = memory;
  }
  num2 = memory;
  display.textContent = num2;
}

function memoryAddSubtract(e) {
  if (memory) {
    let op = e.target.textContent === "M+" ? "+" : "-";
    memory = calculate(memory, num1, op);
  } else {
    alert("Nothing stored in memory... enter a number then press MS to store.");
    return;
  }
}

function memoryStore() {
  if (display.textContent === "0") return;
  memory = display.textContent;
  console.log({ memory });
}

document.querySelector("#clear").addEventListener("click", clear);
function clear() {
  display.textContent = "0";
  num1 = "";
  num2 = "";
  operand = "";
}
