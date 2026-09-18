const themeToggleBtn = document.getElementById('themeToggleBtn'),
        navLinks = document.querySelectorAll('nav .container .body ul li a'),
        sections = document.querySelectorAll('.page-section'),
        popupBoxes=document.querySelectorAll('.popup .box');


themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('Glow-theme');
}); 



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

popupBoxes.forEach(function(box){
    box.addEventListener('click',function(e){
        e.stopPropagation();
    })
});
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = new FormData(this);
    const userName = formData.get('userName');

    console.log(`Welcome back, ${userName}!`);

    this.reset();

    closePopup();
  });
}