import { onNavigate } from '../main.js';

export const createAccount = () => {

  const divcreateAccount = document.createElement('div');
  divcreateAccount.setAttribute ('id', 'createAccount');
  const user = document.createElement('input');
  const userName = document.createElement('p');
  const email = document.createElement('p');
  const password = document.createElement('p');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.className = 'emailRegister'
  inputEmail.setAttribute('placeholder', 'correo electronico');
  inputEmail.setAttribute ('id', 'inputEmail');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'min. 6 caracteres');
  inputPassword.setAttribute ('id', 'inputPassword');
  const returnButton = document.createElement('button');
  returnButton.setAttribute('id', 'btnReturn');
  returnButton.src= './img/comuniapp.png'
  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'btnSend');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/logo.png'

  userName.textContent = 'Nombre de Usuario';
  email.textContent = 'Correo electronico';
  password.textContent = 'Contraseña';
  sendButton.textContent = 'Enviar';
  returnButton.textContent = 'Regresar';

  returnButton.addEventListener('click', () => {
    onNavigate('/');
  });

  sendButton.addEventListener('click', (e) => {
    e.preventDefault;
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    console.log(email)
    console.log(password)
  });


  divcreateAccount.append(returnButton, userName, user, email, inputEmail, password, inputPassword, sendButton, imgLogo);
  return divcreateAccount;
};
