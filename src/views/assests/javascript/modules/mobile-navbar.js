document.getElementById('overlay-btn').addEventListener('click', function(){
    let overlayClosed = document.querySelector('.menu-overlay');
    let menuOpen = document.querySelector('.menu');
    overlayClosed.classList.toggle('open');
    menuOpen.classList.toggle('open');
});