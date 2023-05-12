let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let amPM = document.querySelector('.am-pm');


setInterval(function() {
  let currentDate = new Date();

  let hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  hour.textContent = hours + ':';

  let morningOrAfternoon = currentDate.getHours() >= 12 ? 'PM' : 'AM';
  amPM.textContent = morningOrAfternoon 

  let minutes = currentDate.getMinutes();
  minute.textContent = minutes + ':';

  let seconds = currentDate.getSeconds();
  second.textContent = seconds;
},1000);



