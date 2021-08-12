let xhr = new XMLHttpRequest();
let arr;

xhr.addEventListener('load', function(evt) {
  console.log(xhr.readyState);
  console.log(xhr.status + ' ' + xhr.statusText);
  // console.log(xhr);
  // console.log(xhr.responseText);
  arr = JSON.parse(xhr.responseText);
  console.log(arr[1].colorCoat);
});



xhr.open('GET', 'https://23.javascript.pages.academy/code-and-magick/data'); // открытие запроса

console.log(xhr.readyState);


xhr.send(); // отправка запроса