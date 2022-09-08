import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  div.className = 'welcome';
  const buttonCreateAccount = document.createElement('button');
  const buttonSignInGoogle = document.createElement('button');
  const buttonSignIn = document.createElement('button');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h2');
  const description = document.createElement('p');
  const welcomeImage = document.createElement('img');

  buttonCreateAccount.textContent = 'Crear Cuenta';
  buttonSignInGoogle.textContent = 'Continuar con Google';
  buttonSignIn.textContent = 'Iniciar Sesión';
  title.textContent = 'ComuniApp';
  subtitle.textContent = 'TODOS SOMOS MIGRANTES';
  description.textContent = 'Aquí encontrarás una comunidad que te hará sentir en casa';
  welcomeImage.src = './img/migrant.png';

  buttonCreateAccount.addEventListener('click', () => {
    onNavigate('/createAccount');
  });

  // eslint-disable-next-line max-len
  div.append(title, welcomeImage, subtitle, buttonCreateAccount, buttonSignInGoogle, buttonSignIn, description);
  return div;
};
