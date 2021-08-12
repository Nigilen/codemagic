let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
let arr;


let onError = function (message) {
  console.log(message);
}

let onSuccess = function (abb) {
  console.log(abb);
};

xhr.addEventListener('load', function(evt) {
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


  // console.log(xhr.readyState);
  // console.log(xhr.status + ' ' + xhr.statusText);
  // console.log(xhr);
  // console.log(xhr.responseText);
  // console.log(xhr.response);
  // try {
  //   console.log(JSON.parse(xhr.responseText));
  // } catch (err) {
  //   console.err(err.message);
  // }
});



xhr.open('GET', 'https://23.javascript.pages.academy/code-and-magick/data'); // открытие запроса

console.log(xhr.readyState);


xhr.send(); // отправка запроса