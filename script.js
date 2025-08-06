inputArea = document.querySelector(".input-field");

let typeState = "start";
let state = "num1";

let num1 = "";
let operator = "";
let num2 = "";

function operate() {}

document.querySelectorAll(".input-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (typeState === "start") {
      inputArea.textContent = e.target.textContent;
      num1 = "";
      num1 += e.target.textContent;
      typeState = "";
    } else {
      inputArea.textContent += e.target.textContent;
      if (state === "num1") {
        num1 += e.target.textContent;
      } else {
        num2 += e.target.textContent;
      }
    }
  });
});

document.querySelectorAll(".work-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    typeState = "";
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
    }

    console.log(operator);

    state === "num1" ? (state = "num2") : (state = "num1");
  });
});

document.querySelector(".clear-btn").addEventListener("click", () => {
  inputArea.textContent = "0";
  state = "num1";
  typeState = "start";
});

document.querySelector(".operate-btn").addEventListener("click", () => {
  if (operator === "+") {
    inputArea.textContent = +add(+num1, +num2);
  }
  if (operator === "−") {
    inputArea.textContent = +subtract(+num1, +num2);
  }
  if (operator === "÷") {
    inputArea.textContent = +divide(+num1, +num2).toFixed(3);
  }
  if (operator === "×") {
    inputArea.textContent = +multiply(+num1, +num2).toFixed(3);
  }
  num1 = inputArea.textContent;
  num2 = "";
  state = "num1";
  typeState = "start";
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
