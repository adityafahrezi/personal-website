const menuIcon = document.querySelector('.menu-icon');
const dotsIcon = document.querySelectorAll('.menu-icon div');
const menu = document.querySelector('nav a');

document.body.addEventListener('click', e => {
   //menu events 
  dotsIcon.forEach(dot => {
    if (e.target === menuIcon || e.target === dot){
      menuIcon.classList.toggle('appear');
      menu.classList.toggle('appear');
      document.body.classList.toggle('appear');
    } else if (e.target !== menuIcon || e.target !== menu){
      menuIcon.classList.remove('appear');
      menu.classList.remove('appear');
      document.body.classList.remove('appear');
    };
  });
});