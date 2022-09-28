"use-strict";
let counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);

counterArr.map((item) => {
  let count = 0;

  function counterUp() {
    count++;
    item.textContent = count;
    if (count == item.dataset.number) {
      clearInterval(counterInterval);
    }
  }

  let counterInterval = setInterval(function () {
    counterUp();
  }, 1000 / item.dataset.number);
});
