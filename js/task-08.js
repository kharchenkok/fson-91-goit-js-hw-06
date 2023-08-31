const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Будь ласка, заповніть всі поля!');
  }

  const formData = { email: email.value, password: password.value };
  console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
