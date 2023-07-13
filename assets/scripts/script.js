const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const close = document.getElementById("close");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("toggle");
});
close.addEventListener("click", function () {
  mobileMenu.classList.remove("toggle");
});
const swup = new Swup();
AOS.init();



