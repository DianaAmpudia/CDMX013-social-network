// import { onNavigate } from "../main.js";

export const homepage = () => {
  const divHomePage = document.createElement('div');
  divHomePage.className = 'welcome';
  const message = document.createElement('h1');
 
message.textContent = 'En Construcción...';
divHomePage.append(message);
  return divHomePage;
};
