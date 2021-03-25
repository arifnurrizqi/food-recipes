const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const on = document.getElementById('on');
const off = document.getElementById('off');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    on.classList.toggle('hidden');
    off.classList.toggle('hidden');
});