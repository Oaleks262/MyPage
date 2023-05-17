let btn = document.querySelector('.btnmanu');
let newNav = document.querySelector('.dublnav');
let openMenu = false;
btn.addEventListener('click', openMen);


function openMen() {
  if (openMenu == false) {
    newNav.style.display = 'flex';
    openMenu = true;
  }
  else {
    newNav.style.display = 'none';
    openMenu = false;
  }
  
}
