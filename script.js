let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let itens = document.querySelectorAll(".list .itens");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll("ul li");
let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

nextButton.onclick = () => {
  let itenOld = container.querySelector(".list .itens.active");
  itenOld.classList.remove("active");

  active = active + 1 > lastPosition ? 0 : active + 1;
  itens[active].classList.add("active");

  let dotsOld = indicator.querySelector("ul li.active");
  if (dotsOld) {
    dotsOld.classList.remove("active");
  }
  dots[active].classList.add("active");
  indicator.querySelector(".number").innerHTML = String(active + 1).padStart(
    2,
    "0",
  );
};

prevButton.onclick = () => {
  let itenOld = container.querySelector(".list .itens.active");
  itenOld.classList.remove("active");

  active = active - 1 < firstPosition ? lastPosition : active - 1;
  itens[active].classList.add("active");
  let dotsOld = indicator.querySelector("ul li.active");
if (dotsOld) {
  dotsOld.classList.remove("active");
}
dots[active].classList.add("active");

indicator.querySelector('.number').innerHTML =
  String(active + 1).padStart(2, "0");
};
