/* 
* 1) Инициализация слайдера: 
*     var newslider = new slider('nameSlider');
*     
* 2) Структура в html, с обязательным присутствием символов в классе в скобках:
*     .nameSlider
*         .nameContainer    //элемент не обязателен
*             .( __box )
*             .( __ind )    //элемент не обязателен
*             .( __btn )
*
* 3) Должен присутствовать класс active.
 */




function slider(slider_name) {
    console.log(slider_name)
    let parent = detectParent();
 	var ind, page;
 	
 	for (let i=0; i<parent.childNodes.length; i++) {
 		if (parent.childNodes[i].nodeType == 1) {
 			let name = parent.childNodes[i];

 			if (~name.getAttribute('class').indexOf("__box")) {
 				page = getElements(name);
 			} 


 			if (~name.getAttribute('class').indexOf("__ind")) {
 				ind = getElements(name);
                for (var prop in ind) {
                    ind[prop].addEventListener("click", eventClick);
                }
 			} 

 			if (~name.getAttribute('class').indexOf("__btn")) {
                name.addEventListener("click", eventClick);
 			} 
 		}
 	}
   
    /* --- Определяем внутренний контейнер для слайдера. */
    function detectParent() {
        let elem = document.getElementById(slider_name);
        let c = elem.childNodes;
        let count = 0;
        let num;
        for (let j=0; j<elem.childNodes.length; j++) {
            if (c[j].nodeType == 1) {
                num = [j];
                count++;
            } 
        }
        return count > 2 ? elem : c[num];
    }

    /* --- Получить дочерние элементы */
   	function getElements(n) {
        let _arr = [];
		for (let l=0; l<n.childNodes.length; l++) {
			if (n.childNodes[l].nodeType == 1) {
				_arr.push(n.childNodes[l]);
			} 
		}
		return _arr;
   	}

    /* --- Event клик */
    function eventClick() {
        for (let i=0; i<page.length; i++) {
            
            /* page */
            if (~page[i].getAttribute('class').indexOf("active")) {

                /* button left */
                if (~this.getAttribute('class').indexOf("left") && !!page[i-1]) {
                    page[i].classList.remove('active'); 
                    page[i-1].classList.add('active');
                    ind ? ind[i].classList.remove('active') : 0;
                    ind ? ind[i-1].classList.add('active') : 0;
                    break;
                } else if (~this.getAttribute('class').indexOf("left") && !page[i-1]) {
                    page[i].classList.remove('active'); 
                    page[page.length-1].classList.add('active');
                    ind ? ind[i].classList.remove('active') : 0;
                    ind ? ind[ind.length-1].classList.add('active') : 0;
                    break;
                }

                /* button right */
                if (~this.getAttribute('class').indexOf("right") && !!page[i+1]) {
                    page[i].classList.remove('active'); 
                    page[i+1].classList.add('active');                  
                    ind ? ind[i].classList.remove('active') : 0;
                    ind ? ind[i+1].classList.add('active') : 0;
                    break;
                } else if (~this.getAttribute('class').indexOf("right") && !page[i+1]) {
                    page[i].classList.remove('active'); 
                    page[0].classList.add('active');
                    ind ? ind[i].classList.remove('active') : 0;
                    ind ? ind[0].classList.add('active') : 0;
                    break;
                }
            } 

            /* indicators */
            if (!!ind && ~ind[i].getAttribute('class').indexOf("active") && ind[i] != this) {
                page[i].classList.remove('active');    
                ind[i].classList.remove('active');
            }
            else if (!!ind && ind[i] == this) {
                page[i].classList.add('active');
                this.classList.add('active');
            }
        }
    }

}