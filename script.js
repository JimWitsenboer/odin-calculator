const calculatorElements = document.querySelectorAll('tbody td');

let valuesArray = [];
calculatorElements.forEach(element => {
  element.addEventListener('click', eventListener);
});

const mathOperations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y
  };

function eventListener(event) {
  const cell = event.target.closest('td');
  if (!cell) {return;}
  let cellValue = cell.innerText
  valuesArray.push(cellValue);
  document.getElementById("celvalues").innerHTML = valuesArray.join("");

  let splitValues, firstNumber, equationOperator, lastNumber;

  if (valuesArray.includes("=")) {
    valuesArray.pop()
    splitValues = valuesArray.join("").split(/(-|\/|\*|\+)/g);
    firstNumber = Number(splitValues[0]);
    equationOperator = splitValues[1];
    lastNumber = Number(splitValues[2]);
    const result = mathOperations[equationOperator](firstNumber, lastNumber);
    document.getElementById("celvalues").innerHTML = result;
  };

  if (valuesArray.includes("AC")) {
    valuesArray = [];
    document.getElementById("celvalues").innerHTML = valuesArray.join("");
    splitValues, firstNumber, equationOperator, lastNumber = "";

  }
};
