const userInput = document.getElementById('validation-input');

const onInputBlur = ({ currentTarget }) => {
  const dataLength = Number(currentTarget.dataset.length);
  const inputLength = currentTarget.value.length;

  currentTarget.classList.toggle('invalid', inputLength !== dataLength);
  currentTarget.classList.toggle('valid', inputLength === dataLength);
};

userInput.addEventListener('blur', onInputBlur);
