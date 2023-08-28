function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
  const button = document.querySelector(".dmode img");
  if(element.classList.contains("dark-mode")){ 
	button.src = "sun.png";
        button.alt = "L";
  }
  else {
      button.src = "dark mode.png"; 
      button.alt = "D"; 
    }
}
function deleteLastCharacter() {
    var displayElement = document.getElementById('result');
    var currentValue = displayElement.value;

    if (currentValue.length > 0) {
        var newValue = currentValue.slice(0, -1);
        displayElement.value = newValue;
    }
}
