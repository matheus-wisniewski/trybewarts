const btnEnviar = document.getElementById('btn-login');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
function alerta() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function enableSubmit() {
  submitBtn.disabled = !agreement.checked;
}
btnEnviar.addEventListener('click', alerta);
agreement.addEventListener('change', enableSubmit);


/* teste */
