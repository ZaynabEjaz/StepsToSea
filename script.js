// navbar
const navLinks = document.querySelector(".navLinks");

function onToggleMenu(e) {
  e.classList.toggle("fa-bars");
  e.classList.toggle("fa-times");
  navLinks.classList.toggle("top-[9%]");
  navLinks.classList.toggle("top-[-100%]");
}


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
