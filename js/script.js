// const hamburgerButton = document.getElementById('hamburger');
// const navBar = document.getElementById('nav-bar');

// hamburgerButton.addEventListener('click', displayNavbar);

// function displayNavbar() {
//   navBar.classList.toggle('open-nav-bar')
// }


document.getElementById('theme-button').addEventListener('click', changeTheme)

function changeTheme() {
  document.body.classList.toggle('light');
}