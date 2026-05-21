let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let itens = document.querySelectorAll(".list .itens");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

function updateSlider() {
  // remove item ativo
  let itemOld = container.querySelector(".list .itens.active");
  itemOld.classList.remove("active");

  // adiciona novo item ativo
  itens[active].classList.add("active");

  // remove dot ativo
  let dotsOld = indicator.querySelector("ul li.active");

  if (dotsOld) {
    dotsOld.classList.remove("active");
  }

  // adiciona dot ativo
  dots[active].classList.add("active");

  // atualiza número
  indicator.querySelector(".number").innerHTML = String(active + 1).padStart(
    2,
    "0",
  );
}

// botão next
nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  updateSlider();
};

// botão prev
prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  updateSlider();
};
