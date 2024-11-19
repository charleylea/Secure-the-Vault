// Three variables are defined using arithmetic operators

let num1 = 7 + 3;
let num2 = 61 - 21;
let num3 = 52 * 0.75;

//alert message
alert(
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
);

// using string interpolation concatenate the three variables
function printMessage() {
  document.getElementById("output").innerHTML = `${num1} - ${num2} - ${num3}`;
}
