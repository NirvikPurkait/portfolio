const hamburgerButton = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

hamburgerButton.addEventListener('click', displayNavbar);

function displayNavbar() {
//   if (navBar.style.display == 'flex') {
//     navBar.style.display = 'none';
//   }
//   else navBar.style.display = 'flex';

//   console.log(hamburgerButton);
  
  navBar.classList.toggle('open-nav-bar')
}
