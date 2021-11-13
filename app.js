console.log("App.js in Counter app");
let add = document.getElementById("increment");
let sub = document.getElementById("decrement");
let number = document.querySelector(".number");
console.log(add, sub, number);
let int = 0;
add.addEventListener("click", function () {
  int += 1;
  number.innerHTML = int;
});
sub.addEventListener("click", function () {
  int -= 1;
  number.innerHTML = int;
});
