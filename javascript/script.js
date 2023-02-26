const navE1 = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 56) {
        navE1.classList.add('navbar-scrolled', 'navbar-nav')
    } else if (window.scrollY < 56) {
        navE1.classList.remove('navbar-scrolled', 'navbar-nav')
    }

});