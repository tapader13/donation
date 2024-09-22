const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-lg', 'bg-opacity-90');
  } else {
    navbar.classList.remove('backdrop-blur-lg', 'bg-opacity-90');
  }
});
