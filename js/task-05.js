const userInput = document.getElementById('name-input');
const userOutput = document.getElementById('name-output');

const onInputChange = ({ currentTarget }) =>
  (userOutput.textContent = currentTarget.value || 'Anonymous');

userInput.addEventListener('input', onInputChange);
