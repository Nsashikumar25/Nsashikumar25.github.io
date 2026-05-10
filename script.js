const emailAction = document.querySelector('#emailAction');
const emailButton = document.querySelector('#emailButton');
const fadeElements = document.querySelectorAll('.fade-up');
const mailto = 'mailto:nsashikumar01@outlook.com';

function activateEmail() {
  window.location.href = mailto;
}

if (emailAction) {
  emailAction.addEventListener('click', activateEmail);
}
if (emailButton) {
  emailButton.addEventListener('click', activateEmail);
}

const observerOptions = {
  threshold: 0.12,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach((el) => observer.observe(el));
