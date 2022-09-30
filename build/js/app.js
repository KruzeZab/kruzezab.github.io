// Enable AOS
AOS.init();

const menu = document.querySelector('#menu');
const dropdownNav = document.querySelector('.navbar');

const links = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

// Toggle Navbar (show navbar and change burger icon)
const toggleNavbar = () => {
  dropdownNav.classList.toggle('navbar--active');
  menu.classList.toggle('menu-active');
};

// Bind toggleNavbar to menu click
menu.addEventListener('click', toggleNavbar);
// Bin toggleNavbar to link click
links.forEach(link => {
  link.addEventListener('click', toggleNavbar);
});

// Add Submit Listener to Form
const form = document.querySelector('#contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.querySelector('#contact-form-submit');
  btn.disabled = true;
  btn.classList.remove('btn--primary');
  btn.classList.add('btn--disabled');
  let data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      form.reset();
      showAlert('success', 'Your message has been sent!');
    })
    .catch(() => {
      showAlert('danger', 'Error Sending Message. Try again!');
    })
    .finally(() => {
      btn.disabled = false;
      btn.classList.remove('btn--disabled');
      btn.classList.add('btn--primary');
    });
});

const showAlert = (type, msg) => {
  const alert = document.querySelector('#alert');
  alert.classList.add(`alert--${type}`);
  alert.textContent = msg;
  alert.style.opacity = 1;
  alert.style.visibility = 'visible';

  setTimeout(() => {
    alert.classList.remove(`alert--${type}`);
    alert.style.opacity = 0;
    alert.style.visibility = 'hidden';
  }, 2000);
};
