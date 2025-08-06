inputArea = document.querySelector(".input-field");

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

document.querySelectorAll(".input-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    inputArea.textContent += e.target.textContent;
  });
});

document.querySelectorAll(".work-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    inputArea.textContent += ` ${e.target.textContent} `;
  });
});

document.querySelector(".clear-btn").addEventListener("click", () => {
  inputArea.textContent = "";
});
