// function to validate input
// create functions for add, substract, divided and

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i]
  }
  return sumArray;
};

const multiply = function(...args) {
  let multipliedArgs = 1;
  for (let i = 0; i < args.length; i++) {
    multipliedArgs *= args[i]
  }
  return multipliedArgs;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let makeRange = 1;
  for (let i = num; i > 0; i--) {
    makeRange *= i;
  }
  return makeRange;
};

const tbody = document.querySelector('tbody');
let countClick;
let firstNumber, operatorValue, secondNumber;
tbody.addEventListener('click', function (e) {
  const cell = e.target.closest('td');
  if (!cell) {return;} // Quit, not clicked on a cell
  if (countClick === 0) {
    firstNumber = cell.innerText;
    document.getElementById("celvalues").innerHTML = firstNumber;
  } else if(countClick === 1) {
    operatorValue = cell.innerText;
    document.getElementById("celvalues").innerHTML = operatorValue;
  } else {
    secondNumber = cell.innerText;
    document.getElementById("celvalues").innerHTML = secondNumber;
  }
  // let cellValue = cell.innerText;
  // document.getElementById("celvalues").innerHTML = cellValue;
  countClick++;
});
console.log(countClick);
console.log(firstNumber, operatorValue, secondNumber );
