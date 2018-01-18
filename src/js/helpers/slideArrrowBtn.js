/*слайдер боковые кнопки*/
function active_arrow(target, direction) {

    var point = document.querySelectorAll(target);
    var arrPoint = Array.prototype.slice.call(point);

    for (var i=0; i < arrPoint.length; i++) {
        console.log(arrPoint[i]);
        var elem_checked = arrPoint[i].hasAttribute('checked');

        //левая кнопка 
        if (elem_checked && direction == 'left') { 
            if (arrPoint[i-1]) {
                arrPoint[i].removeAttribute('checked');
                arrPoint[i-1].setAttribute("checked", "checked");
                return;
            }
            if (!arrPoint[i-1]) {
                arrPoint[i].removeAttribute('checked');
                arrPoint[arrPoint.length - 1].setAttribute("checked", "checked");
                return;
            } else {'error';}
        }

        //правая кнопка
        if (elem_checked && direction == 'right') { 
            if (arrPoint[i+1]) {
                arrPoint[i].removeAttribute('checked');
                arrPoint[i+1].setAttribute("checked", "checked");
                return;
            } 
            if (!arrPoint[i+1]) {
                arrPoint[i].removeAttribute('checked');
                arrPoint[0].setAttribute("checked", "checked");
                return;
            } else {'error';}
        }
    }
}