const counter = document.querySelector(".counter");

const increase = document.querySelector(".ics");
const reset = document.querySelector(".rst");
const decrease = document.querySelector(".dcs");

counter.innerHTML = 0;

decrease.addEventListener("click", () => {
  counter.innerHTML--;
});

reset.addEventListener("click", () => {
  counter.innerHTML = 0;
});

increase.addEventListener("click", () => {
  counter.innerHTML++;
});
