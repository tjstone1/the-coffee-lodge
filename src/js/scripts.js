const menuToggle = document.getElementById("menu-toggle");
const main = document.getElementById("main-nav");
const hamburger = document.getElementById("hamburger");
menuToggle.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  main.classList.toggle("is-open");
});
