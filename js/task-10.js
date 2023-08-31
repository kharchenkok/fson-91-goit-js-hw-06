const controls = document.getElementById('controls');
const inputNum = controls.querySelector('input');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

const createBoxes = () => {
  let size = 30;
  const markup = [];
  const amount = inputNum.value;

  for (let i = 0; i < amount; i += 1) {
    const itemBackgroundColor = getRandomHexColor();
    const item = `<div style='width:${size}px; height:${size}px; background-color: ${itemBackgroundColor} '></div>`;
    markup.push(item);
    size += 10;
  }

  boxes.innerHTML = markup.join('');
};
const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputNum.value = '';
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
