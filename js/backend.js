
// DOWNLOAD

(function(){
  let URL = 'https://23.javascript.pages.academy/code-and-magick/data';
  
  window.load = function (onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    xhr.open('GET', URL);
    
    xhr.addEventListener('load', function() {
      onSuccess(xhr.response);
    });
    xhr.send();
  }

})();

// UPLOAD

(function(){
  let URL = 'https://23.javascript.pages.academy/code-and-magick';

  window.upload = function (data,  onSuccess) { // набор данных и что произойдет коогда они придут
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    let onError = function(error) {
      console.log(error);
    };

    xhr.addEventListener('load', function() {
      let error;
      
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        case 400:
          error: 'Неверный запрос';
          break;
        case 401:
          error: 'Пользователь не авторизирован';
          break;
        case 404:
          error: 'Ничего не найдено';
          break;
        
          default: 
            error: 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
        };

        if (error) {
          onError(error);
        };
    });
    
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();






(function () {
  let similarListElement = document.querySelector('.setup-similar-list');
  
  let tpl = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  
  let renderWizard = function (wizards) {
    let wizardElement = tpl.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;
  
    return wizardElement;
  };
    
  window.load(function(wizards) {
    let fragment = document.createDocumentFragment();
  
    for (let i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
  
    similarListElement.appendChild(fragment);
  
    setup.classList.remove('hidden');
  })
})();






// let xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// let arr;


// let onError = function (message) {
//   console.log(message);
// }

// let onSuccess = function (abb) {
//   console.log(abb);
// };

// xhr.addEventListener('load', function(evt) {
//   let error;
//   switch (xhr.status) {
//     case 200:
//       onSuccess(xhr.response);
//       break;
//     case 400:
//       error: 'Неверный запрос';
//       break;
//     case 401:
//       error: 'Пользователь не авторизирован';
//       break;
//     case 404:
//       error: 'Ничего не найдено';
//       break;
    
//       default: 
//         error: 'Статус ответа: : ' + xhr.status + ' ' + xhr.statusText;
//     };

//     if (error) {
//       onError(error);
//     };

// });



// xhr.open('GET', 'https://23.javascript.pages.academy/code-and-magick/data'); // открытие запроса

// console.log(xhr);


// xhr.send(); // отправка запроса