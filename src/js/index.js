// --- Библиотеки
//= helpers/mobile_detect/mobile-detect.min.js
//= helpers/polyphile/stickyfill.min.js

var isScrolling; //получает значение из objMobileDetect для catchEventScroll

// --- other
//= helpers/mobile_detect/objMobileDetect.js

//= helpers/catchEventScroll.js
//= helpers/floatColorMenu.js
//= helpers/reviewsNextPages.js
//= helpers/slideArrrowBtn.js



//проверка на IE
var ua = window.navigator.userAgent.toLowerCase(),
is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);

if (is_ie) {
    //откл анимацию
    isScrolling = true;

    //полифил для ie 
    var elements = document.querySelectorAll('.header');
    Stickyfill.add(elements);
}



window.onscroll = function() {
	FloatColorMenu (header); //анимация меню при скролле
};