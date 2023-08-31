const widget = document.querySelector('.widget');
const colorSpan = widget.querySelector('.color');
const buttonChangeCl = widget.querySelector('.change-color');

const changeColor = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeCl.addEventListener('click', changeColor);
