let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src',"c:\Users\Cliente\Documents\Site teste\Imagens\vedasim-parede-75.jpg" );
  } else {
    myImage.setAttribute ('src','c:\Users\Cliente\Documents\Site teste\Imagens\vedasimrapido.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let nome = prompt('Por Favor, me diga seu nome:');
  if(!nome) {
    setUserName();
  } else {
    localStorage.setItem('name', nome);
    myHeading.innerHTML = 'BEM VINDO, ' + nome;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'BEM VINDO, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}