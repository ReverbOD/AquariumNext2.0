// !Active
const activeLink = document.querySelectorAll('.nav-link');
function activeColor (){
  activeLink.forEach((l) => l.classList.remove('active'));
  this.classList.add('active');
}
activeLink.forEach((l) => l.addEventListener('click', activeColor));
  
// !Collapse
const linkCollapse = document.getElementsByClassName('collapse-link');
var i;
  
for (i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener('click', function () {
    const collapseMenu = this.nextElementSibling;
    collapseMenu.classList.toggle('showCollapse');
  
    const rotate = collapseMenu.previousElementSibling;
    rotate.classList.toggle('rotate');
  });
}
  