function calculate() {
    let input = document.getElementById("input").value;
    let output = eval(input);
    document.getElementById("output").innerHTML = "Результат: " + output;
  }