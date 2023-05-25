function calculate() {
    var value1 = parseFloat(document.getElementById("value1").value);
    var operator = document.getElementById("operator").value;
    var value2 = parseFloat(document.getElementById("value2").value);
    var result = 0;

    if (operator === "+") {
      result = value1 + value2;
    } else if (operator === "-") {
      result = value1 - value2;
    } else if (operator === "*") {
      result = value1 * value2;
    } else if (operator === "/") {
      result = value1 / value2;
    }

    document.getElementById("result").textContent = "Result: " + result;
}