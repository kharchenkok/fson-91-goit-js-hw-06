const userInput = document.getElementById('font-size-control');
const userOutput = document.getElementById('text');

const onInputChange = ({ currentTarget }) =>
  (userOutput.style.fontSize = currentTarget.value + 'px');

userInput.addEventListener('input', onInputChange);
