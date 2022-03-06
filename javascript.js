const navmenu = document.querySelector('.nav-list');
const hammenu = document.querySelector('.hamburger');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

close.style.display = 'none';

hammenu.addEventListener('click', () => {
  navmenu.classList.toggle('transition');
  if (close.style.display === 'none') {
    close.style.display = 'block';
    open.style.display = 'none';
  } else {
    open.style.display = 'block';
    close.style.display = 'none';
  }
});
