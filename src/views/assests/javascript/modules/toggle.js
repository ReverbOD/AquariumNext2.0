// !Toggle Menu
document.getElementById('toggle').addEventListener('click', function(){
    let navigation = document.querySelector('#navbar');
    let toggle = document.querySelector('#toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
})