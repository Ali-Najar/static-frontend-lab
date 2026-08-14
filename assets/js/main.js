console.log("TeamFlow application loaded.");

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});


const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});