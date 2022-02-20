const word = '<CODER>';
const h2Cover = document.querySelector('.typed');
const main = document.querySelector('main');
const anchor = document.getElementsByClassName('button');
const menuIcon = document.querySelector('.button-menu');
const navBar = document.querySelector('nav');
const body = document.querySelector('body');
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

    if (window.screen.width < 790) {
      console.log(navBar.style.display)
      navBar.style.display = 'none';
    }

    for (let a = 0; a < anchor.length; a += 1) {
      const href = anchor[a].getAttribute('href');
      const elements = document.querySelector(href);

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

function fixFade() {
  setTimeout(() => {
    body.style.display = 'flex';
  }, 100);
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

// function sendEmail() {
//   document.getElementById('send').addEventListener('click', (event) => {
//     event.preventDefault();
//     emailjs.sendForm('contact_portfolio', 'contact_form', form.current)
//       .then(function() {
//         console.log('SUCCESS!');
//       }, function(error) {
//         console.log('FAILED...', error);
//       });
//   });
// }

window.onload = function() {
  setTimeout(type, 2500);
  fixFade();
  addFade();
  // sendEmail();
};
