console.log('Hello! I\'m Black and white 😊.')

function getScreenName() {
    var screenSize = window.getComputedStyle(document.getElementsByClassName('page')[0], ':after').content.replace(/"/g,'');
    return screenSize;
}

// Open/close menu

if (document.querySelectorAll(".nav").length > 0) {
    var nav = document.querySelector(".nav");
    var buttonMenu = document.querySelector(".button-menu");

    buttonMenu.addEventListener("click", function () {
        if (nav.classList.contains("nav--opened")) {
            nav.classList.remove("nav--opened");
            buttonMenu.classList.remove("button-menu--closed");
        }

        else {
            nav.classList.add("nav--opened");
            buttonMenu.classList.add("button-menu--closed");
        }
    })
}

$('.hero__list').slick({
    arrows: false,
    autoplay: true,
});
