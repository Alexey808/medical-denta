# README.md

*Имя Фамилия: Алексей Светинский*  
*Рабочий репозиторий: [https://github.com/Alexey808/medical-denta.git](https://github.com/Alexey808/medical-denta)*  
*Ссылка на готовую сборку в github-pages: [https://alexey808.github.io/medical-denta/build/index.html](https://alexey808.github.io/medical-denta/build/index.html)*  
*Матерьялы: [Источник](https://drive.google.com/drive/folders/12tHNpju-ZxEsaimTCX83Frl6kbJyUAZn)*  

---

# medical-denta

## От автора (мини отчёт)

* Слайдер по умолчанию без js работает только по точкам. На боковые кнопки я писал скрипт, но не доработан, после кликов по точкам стрелки перестают работать и я его пока не сумел подружить с ie. Так то всё решаемо, но думаю сейчас время будет дороже.  
* Скрипт для стрелок на "Отзывы о нашей работе" работают хорошо в том числе в ie.  
* Анимация при скроле у телефонов, планшетов и ie отключается.  
* Меню прилепакет относительно новым css "position:sticky" но потом пришлось добавить для него полифил для ie.  
* Присутствует "грубоватая" ретина, работает.  

### Проверка валидатором css

__Не понимает вычисление в calc(значение - значение).__
* .header__menu -> Ошибка значения : height Ошибка разбора - 30px)  
* .headslider__page -> Ошибка значения : width Ошибка разбора - 92px)  

__Всё работает.__
* .headslider Свойство background-position-y не существует : -45px  

__Такое значение существует и работает.__
* .services__items  ->  space-evenly не является значением justify-content : space-evenly  
* .article__items  ->  space-evenly не является значением justify-content : space-evenly  
  

### Проверка валидатором html
Ругается на шаринг гугла, но сделал вроде всё как учили.
