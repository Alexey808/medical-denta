var md = new MobileDetect(window.navigator.userAgent);

md.setStyle = function(x) {
    var a=document.createElement("link");
    a.rel="stylesheet";
    a.href=x;
    document.getElementsByTagName("head")[0].appendChild(a);
}

if (md.mobile() && md.phone()) {
    console.log('run mobile');
    isScrolling = true;
} else if (md.tablet()) {
    console.log('run tablet');
    isScrolling = true;
} else {
    console.log('run desktop');
    isScrolling = false; //даём разрешение на запуск анимаций
}