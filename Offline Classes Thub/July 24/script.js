const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
  menu.style.left = '10px'; 
  closeBtn.style.display = 'inline-block';
  menuToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.style.left = '-300px';
  closeBtn.style.display = 'none'; 
  menuToggle.style.display = 'inline-block';
});