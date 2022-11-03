let firstNumber = 8
let secondNumber = 2
document.getElementById("number1").textContent = firstNumber
document.getElementById("number2").textContent = secondNumber

// ==============================

let numberElement = document.getElementById("robot-answer")

function add() {
  numberElement.innerText = firstNumber + secondNumber
  console.log()
}

function subtract() {
  numberElement.innerText = firstNumber - secondNumber
  console.log()
}

function divide() {
  numberElement.innerText = firstNumber / secondNumber
  console.log()
}

function multiply() {
  numberElement.innerText = firstNumber * secondNumber
  console.log()
}
