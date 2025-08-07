inputArea = document.querySelector(".input-field");

let startFresh = true;
let inputNum = "num1";

let num1 = "";
let operator = "";
let num2 = "";

function operate() {}

document.querySelectorAll(".input-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === ".") {
      if (inputNum === "num1" && num1.includes(".")) {
        return;
      }
      if (inputNum === "num2" && num2.includes(".")) {
        return;
      }
    }
    if (startFresh === true) {
      inputArea.textContent = e.target.textContent;
      num1 = "";
      num1 += e.target.textContent;
      startFresh = false;
    } else {
      inputArea.textContent += e.target.textContent;
      if (inputNum === "num1") {
        num1 += e.target.textContent;
      } else {
        num2 += e.target.textContent;
      }
    }
  });
});

document.querySelectorAll(".work-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (num1 && operator && num2) {
      operate();
    }
    if (inputArea.textContent === "IMPOSSIBLE") {
      return;
    }
    startFresh = false;
    operator = e.target.textContent;
    if (
      inputArea.textContent.includes("+") ||
      inputArea.textContent.includes("−") ||
      inputArea.textContent.includes("×") ||
      inputArea.textContent.includes("÷")
    ) {
      inputArea.textContent = inputArea.textContent.replace(
        /[+−×÷]/i,
        operator
      );
    } else {
      inputArea.textContent += ` ${e.target.textContent} `;
      inputNum === "num1" ? (inputNum = "num2") : (inputNum = "num1");
    }
  });
});

document.querySelector(".clear-btn").addEventListener("click", () => {
  inputArea.textContent = "0";
  inputNum = "num1";
  num1 = "0";
  startFresh = true;
});

function operate() {
  if (!num2) {
    inputArea.textContent = "ERROR";
    startFresh = true;
    num2 = "";
    inputNum = "num1";
    return;
  }
  if (operator === "+") {
    inputArea.textContent = +add(+num1, +num2).toFixed(3);
  }
  if (operator === "−") {
    inputArea.textContent = +subtract(+num1, +num2).toFixed(3);
  }
  if (operator === "÷") {
    if (num2 === "0") {
      inputArea.textContent = "IMPOSSIBLE";
      startFresh = true;
      num1 = "";
      num2 = "";
      operator = "";
      inputNum = "num1";
      return;
    }
    inputArea.textContent = +divide(+num1, +num2).toFixed(3);
  }
  if (operator === "×") {
    inputArea.textContent = +multiply(+num1, +num2).toFixed(3);
  }
  num1 = inputArea.textContent;
  num2 = "";
  inputNum = "num1";
  startFresh = true;
}

document.querySelector(".operate-btn").addEventListener("click", operate);

document.querySelector(".backspace-btn").addEventListener("click", () => {
  if (inputArea.textContent.slice(-3) === ` ${operator} `) {
    inputArea.textContent = inputArea.textContent.slice(0, -3);
    inputNum = "num1";
    operator = "";
    return;
  }
  inputArea.textContent = inputArea.textContent.slice(0, -1);
  if (inputArea.textContent === "") {
    inputArea.textContent = "0";
    startFresh = true;
  }
  if (inputNum === "num2") {
    num2 = num2.slice(0, -1);
  }
  if (inputNum === "num1") {
    num1 = num1.slice(0, -1);
  }
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
