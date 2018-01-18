/*
 *  50 -> высота feedback
 */

var header = document.querySelector('.header');

function FloatColorMenu (header) {
    if (!header.classList.contains('header__nav--color') && window.pageYOffset > 50) {
        console.log('add class header__nav!');
        header.classList.add('header__nav--color');

    } else if (header.classList.contains('header__nav--color') && window.pageYOffset < 50) {
        console.log('remove class header__nav!');
        header.classList.remove('header__nav--color');
    }
}

