// var isScrolling = false; //определяю в objMobileDetect.js

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

//--- определяем массив элементов
var item = document.querySelectorAll('.an');
var listItems = Array.prototype.slice.call(item);

//--- циклом пропускаем через функцию обнаружения
function scrolling(e) {
    for (var i = 0; i < listItems.length; i++) {
        
        var listItem = listItems[i];
        // console.log(listItems[i]);
        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("an--active");
        } else {
            listItem.classList.remove("an--active");
        }
    }
}


//функция частично видимых элементов
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

//функция полностью видимых элементов
function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    return ((top >= 0) && (bottom <= window.innerHeight));
}