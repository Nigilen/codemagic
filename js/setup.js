let setup = document.querySelector('.setup').classList.remove('hidden');
let setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');

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