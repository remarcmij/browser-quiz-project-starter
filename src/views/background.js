const parallax = (e) => {
  const bgObjects = document.querySelectorAll('.bgObject');
  bgObjects.forEach((obj) => {
    const moving_value = obj.getAttribute('data-value');
    const x = (e.clientX * moving_value) / 100;
    const y = (e.clientY * moving_value) / 100;

    obj.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
  });
};
document.addEventListener('mousemove', parallax);
