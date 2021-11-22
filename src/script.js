let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.header__navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
