console.log('Hello! I\'m FCG 😊.')

function getScreenName() {
    var screenSize = window.getComputedStyle(document.getElementsByClassName('page')[0], ':after').content.replace(/"/g,'');
    return screenSize;
}

// Open/close menu

if (document.querySelectorAll(".nav").length > 0) {
    var nav = document.querySelector(".nav");
    var buttonMenu = document.querySelector(".button-menu");
    var navList = document.querySelector(".nav__list");
    var heightNav = navList.offsetHeight;

    function toogleMenu() {
        buttonMenu.addEventListener("click", function () {
            if (nav.classList.contains("nav--opened")) {
                nav.classList.remove("nav--opened");
                nav.style.height = "0px";
                buttonMenu.classList.remove("button-menu--closed");
            }

            else {
                nav.classList.add("nav--opened");
                nav.style.height = heightNav + "px";
                buttonMenu.classList.add("button-menu--closed");
            }
        })
    }

    toogleMenu();

    window.addEventListener("resize", function () {
        toogleMenu();
    })
}

$('.hero__list').slick({
    arrows: false,
    // autoplay: true,
});
