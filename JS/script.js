let string = "";
var btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", function (e) {
    var screen = document.getElementById("display-screen");

    if (e.target.innerHTML == "=") {
      string = eval(string);
      screen.innerHTML = string;
    } else if (e.target.innerHTML == "Reset") {
      string = "";
      screen.innerHTML = string;
    } else if (e.target.innerHTML == "AC") {
      string = 0;
      screen.innerHTML = string;
    } else if (e.target.innerHTML == "C") {
      string = parseInt(string / 10);
      console.log(string);
      screen.innerHTML = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      screen.innerHTML = string;
    }
  });
});
