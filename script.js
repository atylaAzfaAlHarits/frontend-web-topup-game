const hamburger = document.getElementById('hamburgers');
const navMenu = document.getElementById('nav-menus');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('hidden');
});

