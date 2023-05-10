let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');


setInterval(function() {
  let currentDate = new Date();

  let hours = currentDate.getHours();
  hour.textContent = hours + ':';

  let minutes = currentDate.getMinutes();
  minute.textContent = minutes + ':';

  let seconds = currentDate.getSeconds();
  second.textContent = seconds;
},1000);




