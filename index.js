// CALCULATOR PROGRAM

/*select the ID display from the display*/
const display = document.getElementById("display");

function welcome(input) {
  display.value += "Welcome 🧮";
}

function appendToDisplay(input) {
  display.value += input;
}

/* calculate the inputs*/
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

/*clear the values*/
function clearDisplay() {
  display.value = "";
}