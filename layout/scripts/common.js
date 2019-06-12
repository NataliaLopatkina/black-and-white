console.log('Hello! I\'m FCG 😊.')

function getScreenName() {
    var screenSize = window.getComputedStyle(document.getElementsByClassName('page')[0], ':after').content.replace(/"/g,'');
    return screenSize;
}

// Slider. Index page
if (document.querySelectorAll(".controls__arrow").length > 0) {

    var animation = false;
    var sliderList = document.querySelector(".slider__container");
    var sliderItem = document.querySelectorAll(".hero");
    var slidePrev = document.querySelector(".controls__arrow--prev");
    var slideNext = document.querySelector(".controls__arrow--next");
    var slideIndex = 0;
    var children = sliderList.children;
    var cloneElementFirst = children[0].cloneNode(true);
    var cloneElementLast = children[sliderItem.length - 1].cloneNode(true);
    var totalCount = sliderItem.length;
    var currentSlide = slideIndex + 1;
    var countBlock = document.querySelector(".controls__count-text");

    slidePrev.onclick = scrollToPrev;
    slideNext.onclick = scrollToNext;
    sliderList.style.width = sliderItem.length * 100 + "%";
    sliderList.insertBefore(cloneElementLast, children[0]);
    sliderList.appendChild(cloneElementFirst);
    sliderList.style.width = (sliderItem.length + 2) * 100 + "%";
    var translatePosition = -(100 / (sliderItem.length + 2)) + "%";
    sliderList.style.transform = "translateX(" + translatePosition + ")";

    countBlock.innerHTML = currentSlide + "/" + totalCount;

    function scrollToNext() {
        if (animation) {
            return;
        }

        animation = true;

        slideNext.classList.add("active");
        slidePrev.classList.remove("active");

        slideIndex++;
        sliderList.classList.add("transition");

        if (slideIndex > sliderItem.length - 1) {
            setTimeout(function () {
                sliderList.classList.remove("transition");
                sliderList.style.width = (sliderItem.length + 2) * 100 + "%";
                slideIndex = 0;
                sliderList.style.transform = "translateX(" + translatePosition + ")";
                animation = false;
            }, 1000)

            currentSlide = 1;
            countBlock.innerHTML = "1"  +  "/"  + totalCount;

            var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
            sliderList.style.transform = "translateX(" + translateScroll + ")";
        }

        else {
            var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
            sliderList.style.transform = "translateX(" + translateScroll + ")";

            var currentSlide = slideIndex + 1;
            countBlock.innerHTML = currentSlide + "/" + totalCount;

            setTimeout(function () {
                animation = false;
            }, 1000)
        }
    }

    function scrollToPrev() {
        if (animation) {
            return;
        }
        animation = true;

        slidePrev.classList.add("active");
        slideNext.classList.remove("active");

        slideIndex--;
        sliderList.classList.add("transition");

        if (slideIndex < 0) {
            setTimeout(function () {
                sliderList.classList.remove("transition");
                sliderList.style.width = (sliderItem.length + 2) * 100 + "%";
                slideIndex = sliderItem.length - 1;
                var translatePositionLast = -sliderItem.length * (100 / (sliderItem.length + 2)) + "%";
                sliderList.style.transform = "translateX(" + translatePositionLast + ")";
                animation = false;
            }, 1000)

            var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
            sliderList.style.transform = "translateX(" + translateScroll + ")";

            currentSlide = sliderItem.length;
            countBlock.innerHTML = currentSlide + "/" + totalCount;
        }

        else {
            var translateScroll = (-(slideIndex + 1) * (100 / (sliderItem.length + 2))) + "%";
            sliderList.style.transform = "translateX(" + translateScroll + ")";

            currentSlide = slideIndex + 1;
            countBlock.innerHTML = currentSlide + "/" + totalCount;

            setTimeout (function () {
                animation = false;
            }, 1000)
        }
    }
}

$('.hero__list').slick({  
    arrows: false,
    autoplay: true,
});