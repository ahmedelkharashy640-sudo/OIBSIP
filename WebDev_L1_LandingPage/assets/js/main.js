const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('Glow-theme');
}); 

const navLinks = document.querySelectorAll('nav .container .body ul li a');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      sections.forEach(sec => sec.classList.remove('active-section'));
      
      navLinks.forEach(l => l.parentElement.classList.remove('active'));

      targetSection.classList.add('active-section');
      this.parentElement.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  });
});