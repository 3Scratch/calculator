var buttons = document.getElementsByTagName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var flag = false;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (flag == false) {
      flag = true;
      display.innerText = "";
    }
    if (value == "=") {
      display.innerText = eval(display.innerText);
    } else if (value == "clear") {
      display.innerText = "";
    } else if (value == "backspace") {
      var current = display.innerText;
      display.innerText = current.slice(0, -1);
    } else {
      console.log("else");
      display.innerText = display.innerText + value;
    }
  });
}
