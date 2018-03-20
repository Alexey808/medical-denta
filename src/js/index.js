// --- Библиотеки
//= helpers/mobile_detect/mobile-detect.min.js
//= helpers/polyphile/stickyfill.min.js


// --- other
//= helpers/sliderInit.js
//= helpers/catchEventScroll.js
//= helpers/floatColorMenu.js

var isScrolling; //получает значение из objMobileDetect для catchEventScroll
var md = new MobileDetect(window.navigator.userAgent);

var headslider = new slider('headslider');
var aboutslider = new slider('aboutslider');
var reviews = new slider('reviews');




//проверка на IE
var ua = window.navigator.userAgent.toLowerCase(),
is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);

if (is_ie) {
    isScrolling = true; //откл анимацию
    //полифил для ie 
    var elements = document.querySelectorAll('.header');
    Stickyfill.add(elements);
} else if ((md.mobile() && md.phone()) || md.tablet()) {
	isScrolling = true;
} else {
	isScrolling = false; //даём разрешение на запуск анимаций
}



window.onscroll = function() {
	FloatColorMenu (header); //анимация меню при скролле
};