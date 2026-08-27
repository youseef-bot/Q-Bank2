// ================================================
// MOBILE NAVIGATION
// ================================================

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ================================================

const navigationLinks = document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ================================================

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("active");

    }

});