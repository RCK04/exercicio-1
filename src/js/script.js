const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationMenu = document.querySelector(".navigation-menu .list");

hamburgerMenu.addEventListener("click", function(){
    navigationMenu.classList.toggle("show");
});

const revealItem = {
    distance: "40px",
    origin: "right",
    duration: 1000,
  };

  ScrollReveal().reveal(".image-area img", {
    ...revealItem,
  });

  ScrollReveal().reveal(".text-hero h1", {
    ...revealItem,
    delay: 500,
  })

  ScrollReveal().reveal(".order-card", {
    ...revealItem,
    interval: 500,
  })