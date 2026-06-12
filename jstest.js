let length;

function myFunction() {
  document.getElementById("myDIV").classList.toggle("hidden");
}

function myFunction2() {
  document.getElementById("htitle").innerText="Hello World!"; 
}
document.addEventListener("DOMContentLoaded", myFunction2);


function demo() {
  length = 6;
  document.getElementById("demo").innerHTML = length;
}
document.addEventListener("DOMContentLoaded", demo);

