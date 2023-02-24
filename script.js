const burger = document.querySelector('#icon');
const menu = document.querySelector('#navb');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    console.log('this  executed');
  }
});
