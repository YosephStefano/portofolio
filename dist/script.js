//navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const up = document.querySelector('#top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        up.classList.remove('hidden');
        up.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        up.classList.remove('flex');
        up.classList.add('hidden');
    }
}

//hamberger

const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
});

// burger luar
window.addEventListener('click', function(e) {
    if (e.target != hamberger && e.target != navMenu) {
        hamberger.classList.remove('hamberger-active');
        navMenu.classList.add('hidden');
    }    
})