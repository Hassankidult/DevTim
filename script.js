const headerEl = document.querySelector(".header");
const mobileNabEl = document.querySelector(".mobile-nav-bar");

mobileNabEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
