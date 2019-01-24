document.addEventListener('DOMContentLoaded', function(){
    var nav = document.querySelector('.main-nav');
    var menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click',function(){
        nav.classList.toggle('open');
    })
});