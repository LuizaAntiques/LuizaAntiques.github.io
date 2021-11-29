const word = '<CODER>';
const h2Cover = document.querySelector('.typed');
const main = document.querySelector('main');
let index = 0;

function type() {
  if (index < word.length) {
    h2Cover.innerHTML += word[index];
    index += 1;
    setTimeout(type, 200);
  }
}

const anchor = document.getElementsByClassName('button');
console.log(anchor);

for(let i = 0; i < anchor.length; i += 1) {
  anchor[i].addEventListener('click', (e) => {
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

function addFade() {
  const home = document.querySelector('#home');
  home.classList.add('fade');
}

window.onload = function() {
  setTimeout(type, 2500);
  addFade();
};
