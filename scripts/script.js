const something = document.querySelector(".something");
alert("I am the boss of all of you");

const string1 = prompt("Enter a");
console.log(string1)
const string2 = prompt("Enter b");
console.log(string2)
console.log(string1+string2)

const num1 = Number(string1)
console.log(num1)
const num2 = Number(string2)
console.log(num2)
console.log(num1+num2)

function sum(a, b) {
  if (a + b <= 20) {
    something.textContent = `The sum of a and b would be ${a + b}`;
  } else {
    something.textContent = "No i cannot calculate bigger numbers than that";
  }
  return a + b;
}

sum(num1, num2);