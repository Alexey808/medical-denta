/* reviews | строничник боковые кнопки */
function next_pages(pages, direction){

    var point = document.querySelectorAll(pages);
    var arrPoint = Array.prototype.slice.call(point);

    for (var i=0; i < arrPoint.length; i++) {
        var check = arrPoint[i].classList.contains('reviews-box__item--active');

        if (check && direction == 'left') {
            
            if (arrPoint[i-1]) {
                arrPoint[i].classList.remove('reviews-box__item--active'); 
                arrPoint[i-1].classList.add('reviews-box__item--active'); 
                return
            } 
            if (!arrPoint[i-1]) {
                arrPoint[i].classList.remove('reviews-box__item--active'); 
                arrPoint[arrPoint.length - 1].classList.add('reviews-box__item--active'); 
                return;
            }
        }
        if (check && direction == 'right') {
            if (arrPoint[i+1]) {
                console.log('элемент найден');
                arrPoint[i].classList.remove('reviews-box__item--active'); 
                arrPoint[i+1].classList.add('reviews-box__item--active'); 
                return
            } 
            if (!arrPoint[i+1]) {
                console.log('след элемент не найденн, идём в конец');
                arrPoint[i].classList.remove('reviews-box__item--active'); 
                arrPoint[0].classList.add('reviews-box__item--active'); 
                return;
            }
        }
    }
}