"use strict";
const increment = document.querySelector(".increment-btn");
const reset = document.querySelector(".reset-btn");
const son = document.querySelector(".counter");
const beep = document.getElementById("beep"); 

let counter = 0;

increment.addEventListener("click", function () {
  counter++;
  son.textContent = counter;
  if (counter % 33 === 0) {
    beep.play();
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  son.textContent = counter;
});
