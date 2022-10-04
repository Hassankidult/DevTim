//Mobile Navigation
const headerEl = document.querySelector(".header");
const mobileNabEl = document.querySelector(".mobile-nav-bar");

mobileNabEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Closing navbar
const links = document.querySelectorAll(".link");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});
