// --- Библиотеки
//= helpers/mobile_detect/mobile-detect.min.js

var isScrolling; //получает значение из objMobileDetect для catchEventScroll

// --- other
//= helpers/mobile_detect/objMobileDetect.js

//= helpers/catchEventScroll.js
//= helpers/floatColorMenu.js
//= helpers/reviewsNextPages.js
//= helpers/slideArrrowBtn.js

window.onscroll = function() {
	FloatColorMenu (header); //анимация меню при скролле
};