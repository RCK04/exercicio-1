const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationMenu = document.querySelector(".navigation-menu .list");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerMenu.addEventListener("click", function(){
    const isOpen = navigationMenu.classList.toggle("show");

    hamburgerIcon.style.display = isOpen ? "none" : "block";
    closeIcon.style.display = isOpen ? "block" : "none";

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
  
  ScrollReveal().reveal(".gallery-item", {
    ...revealItem,
    interval: 300,
  })

  ScrollReveal().reveal(".first-item", {
    ...revealItem,
    rotate: {
        z: 20,
    },
  })

  ScrollReveal().reveal(".second-item", {
    ...revealItem,
    rotate: {
        z: 20,
    },
  })

  ScrollReveal().reveal(".third-item", {
    ...revealItem,
    rotate: {
        z: 20,
    }
  })