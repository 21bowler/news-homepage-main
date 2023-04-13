
const menu = document.getElementById('menu');
const navlist = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
})