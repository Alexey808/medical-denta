var md = new MobileDetect(window.navigator.userAgent);

md.setStyle = function(x) {
    var a=document.createElement("link");
    a.rel="stylesheet";
    a.href=x;
    document.getElementsByTagName("head")[0].appendChild(a);
}

if (md.mobile() && md.phone()) {
    console.log('run setStyle for mobile');
    md.setStyle('css/m-index.css');
} else if (md.tablet()) {
    console.log('run setStyle for tablet');
    md.setStyle('css/t-index.css');
} else {
    console.log('run setStyle for desktop');
    md.setStyle('css/index.css');
}