let setup = document.querySelector('.setup');
let setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');
let setupWizardForm = document.querySelector('.setup-wizard-form');

let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');


let closePopup = function () {
  setup.classList.add('hidden');
  setupClose.removeEventListener('click', clickSetupClose);
  
};
let openPopup = function () {
  setup.classList.remove('hidden');
  
  setupClose.addEventListener('click', clickSetupClose);
  document.addEventListener('keydown', pressEsc);
  setupClose.addEventListener('keydown', pressEnterOnClose);
  
};

let clickSetupOpen = function () {
  openPopup();
};
let clickSetupClose = function () {
  closePopup();
};
let pressEsc = function () {
  if (event.key == "Escape") {
    closePopup();
  }
};
let pressEnterOnClose = function () {
  if (event.key == "Enter") {
    closePopup();
  }
};
let pressEnterOnOpen = function () {
  if (event.key == "Enter") {
    openPopup();
  }
};

setupOpen.addEventListener('click', clickSetupOpen);
setupOpen.addEventListener('keydown', pressEnterOnOpen);




let userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function(evt) {
  if (userNameInput.validity.tooShort || userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Хуевое имя');
  }
});


let wizardFirstNames = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

let wizardSecondNames = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

let coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

let eyesColors = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"  
];

let fierballColor = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"  
];

let simpleMages = [
  {
    name: wizardFirstNames[Math.floor(Math.random()*wizardFirstNames.length)] + ' ' + wizardSecondNames[Math.floor(Math.random()*wizardSecondNames.length)],
    coatColor: coatColors[Math.floor(Math.random()*coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random()*eyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random()*wizardFirstNames.length)] + ' ' + wizardSecondNames[Math.floor(Math.random()*wizardSecondNames.length)],
    coatColor: coatColors[Math.floor(Math.random()*coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random()*eyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random()*wizardFirstNames.length)] + ' ' + wizardSecondNames[Math.floor(Math.random()*wizardSecondNames.length)],
    coatColor: coatColors[Math.floor(Math.random()*coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random()*eyesColors.length)]
  },
  {
    name: wizardFirstNames[Math.floor(Math.random()*wizardFirstNames.length)] + ' ' + wizardSecondNames[Math.floor(Math.random()*wizardSecondNames.length)],
    coatColor: coatColors[Math.floor(Math.random()*coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random()*eyesColors.length)]
  }
];

let similarListElement = document.querySelector('.setup-similar-list');

let tpl = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (let i = 0; i < 4; i++) {
  let wizardElement = tpl.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = simpleMages[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = simpleMages[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = simpleMages[i].eyesColor;
  similarListElement.append(wizardElement);
}


let wizardCoat = document.querySelector('.wizard-coat');
let wizardEyes = document.querySelector('.wizard-eyes');
let wizardFierball = document.querySelector('.setup-fireball-wrap');
let wizardApp = document.querySelector('.setup-wizard-appearance');


let changeCoat = function () {
  wizardCoat.style.transition = '.3s'; 
  wizardCoat.style.fill = coatColors[Math.floor(Math.random()*coatColors.length)];
  wizardApp.querySelector('.coat-color-field').value = coatColors[Math.floor(Math.random()*coatColors.length)];
};

let changeEyes = function () {
  wizardEyes.style.transition = '.3s'; 
  wizardEyes.style.fill = eyesColors[Math.floor(Math.random()*eyesColors.length)];
  wizardApp.querySelector('.eyes-color-field').value = eyesColors[Math.floor(Math.random()*eyesColors.length)];
};

let changeFierball = function () {
  wizardFierball.style.transition = '.3s'; 
  wizardFierball.style.backgroundColor = fierballColor[Math.floor(Math.random()*fierballColor.length)];
  wizardFierball.querySelector('input').value = fierballColor[Math.floor(Math.random()*fierballColor.length)];
};

wizardCoat.addEventListener('click', changeCoat);
wizardEyes.addEventListener('click', changeEyes);
wizardFierball.addEventListener('click', changeFierball);



let setupUserPic = document.querySelector('.upload');
let posX1 = 0;
let posY1 = 0;
let posX2 = 0;
let posY2 = 0;
let posFinal = 0;
let posShiftX = 0;
let posShiftY = 0;
let startCords;
let dragged = false;


let setupStart = function () {

  startCords = {
    x: event.clientX,
    y: event.clientY
  };

  document.addEventListener('mousemove', setupMove);
  document.addEventListener('mouseup', setupEnd);
};

let setupMove = function (event) {
  dragged = true;
  let shift = {
    x: startCords.x - event.clientX,
    y: startCords.y - event.clientY
  }

  startCords = {
    x: event.clientX,
    y: event.clientY
  };
  
  setup.style.left = setup.offsetLeft - shift.x + 'px';
  setup.style.top = setup.offsetTop - shift.y + 'px';
}

let setupEnd = function () {
  if (dragged) {
    let clickPreventdefault = function() {
      event.preventDefault();
      setupUserPic.removeEventListener('click', clickPreventdefault);
    }
    setupUserPic.addEventListener('click', clickPreventdefault);
    dragged = false;
  } 
  
  document.removeEventListener('mousemove', setupMove);
  document.removeEventListener('mouseup', setupEnd);
};

setupUserPic.addEventListener('mousedown', setupStart);