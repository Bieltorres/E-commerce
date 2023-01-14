const buttonSum = document.getElementById("sum");
// pega o elemento do input
const input = document.getElementById("quantity");
// adiciona o event listener ao botão
buttonSum.addEventListener("click", () => {
  //verifica se o valor do input é menor que 10
  if (input.value < 10) {
    //incrementa 1 no valor do input
    input.value++;
  }
});

const buttonSubtract = document.getElementById("subtract");
buttonSubtract.addEventListener("click", () => {
  //verifica se o valor do input é menor que 10
  if (input.value > 1) {
    //incrementa 1 no valor do input
    input.value--;
  }
});

// SLIDER


const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
