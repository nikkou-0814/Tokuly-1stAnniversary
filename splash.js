var splashs = document.querySelector('.splash');
var splash = document.querySelector('.splash-title');
var splashAni = document.querySelector('.splash-title-ani');
var line = document.querySelector('.line');
var splashcolor = document.getElementById('splashcolor');
var header = document.getElementById('header');

window.addEventListener('load', function() {
    setTimeout(function() {
        splash.style.opacity = '1';
    }, 700);
    setTimeout(function() {
        line.style.height = '50px';
    }, 1500);
    setTimeout(function() {
        splashAni.style.opacity = '1';
        splashAni.style.transform = 'translateX(0)';
    }, 2000);
    setTimeout(function() {
        splashcolor.style.color = '#ffd500';
    }, 2500);
    setTimeout(function() {
        splashs.style.opacity = '0';
        header.style.top = '0';
        setTimeout(function() {
            splashs.style.display = 'none';
        }, 1000);
    }, 4000);
});