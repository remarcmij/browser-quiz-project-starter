export const loadPage = (initPageFn, data) => {
  const { element } = initPageFn(data);
  const userInterface = document.querySelector('#root');
  const prevInterface = document.querySelector('#fakeroot');
  prevInterface.innerHTML = '';
  prevInterface.appendChild(element);
  prevInterface.style.left = '48vw';
  prevInterface.style.display = 'block';

  let counter = 48;
  let TIMER = setInterval(() => {
    counter--;
    if (counter != 0) {
      prevInterface.style.left = `${counter}vw`;
    } else {
      prevInterface.style.left = '0.5vw';
      userInterface.innerHTML = '';
      userInterface.appendChild(element);
      userInterface.style.left = '0.5vw';
      prevInterface.innerHTML = '';
      prevInterface.style.display = 'none';
      clearInterval(TIMER);
    }
  }, 20);
};
