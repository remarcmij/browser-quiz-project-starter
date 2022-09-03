const parallax = (e) => {
  const bgObjects = document.querySelectorAll('.bgObject');
  bgObjects.forEach((obj) => {
    let moving_value = obj.getAttribute('data-value');
    let x = (e.clientX * moving_value) / 100;
    let y = (e.clientY * moving_value) / 100;

    obj.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
  });
};
document.addEventListener('mousemove', parallax);
