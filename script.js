const word = '<CODER>';
const h2Cover = document.querySelector('.typed');
const main = document.querySelector('main');
const anchor = document.getElementsByClassName('button');
const menuIcon = document.querySelector('.button-menu');
const navBar = document.querySelector('nav');
let index = 0;

function type() {
  if (index < word.length) {
    h2Cover.innerHTML += word[index];
    index += 1;
    setTimeout(type, 200);
  }
}

for(let i = 0; i < anchor.length; i += 1) {
  anchor[i].addEventListener('click', (e) => {
    for (let a = 0; a < anchor.length; a += 1) {
      const href = anchor[a].getAttribute('href');
      const elements = document.querySelector(href);

      if (!menuIcon.style.display === 'none') {
        navBar.style.display = 'none';
      }

      if (elements.classList.contains('fade')) {
        elements.classList.remove('fade');
      }
    }
    const curElement = e.target.getAttributeNames();
    if (curElement.includes('href')) {
      const el = document.querySelector(e.target.getAttribute('href'));
      el.classList.add('fade');
    } else {
      const a = e.target.parentElement;
      const el = document.querySelector(a.getAttribute('href'));
      el.classList.add('fade');
    }
  });
}

function addFade() {
  const home = document.querySelector('#home');
  home.classList.add('fade');
}

menuIcon.addEventListener('click', () => {
  if (navBar.style.display === 'none') {
    navBar.style.display = 'flex';
  } else {
    navBar.style.display = 'none';
  }
});

window.onload = function() {
  setTimeout(type, 2500);
  addFade();
};