const cursor = document.getElementById('custom-cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursor.style.top = `${cursorY}px`;
  cursor.style.left = `${cursorX}px`;
  requestAnimationFrame(animateCursor);
}

animateCursor();