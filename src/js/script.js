document.addEventListener("DOMContentLoaded", function(){
    let hamburgerMenu =  document.querySelector(".hamburger-menu");
    let navigationMenu = document.querySelector(".navigation-menu .list");

    hamburgerMenu.addEventListener("click", function(){
        navigationMenu.classList.toggle("show")  
    })
})