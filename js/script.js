const hamburgerButton = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

hamburgerButton.addEventListener('click', displayNavbar);

function displayNavbar() {
  navBar.classList.toggle('open-nav-bar')
}
