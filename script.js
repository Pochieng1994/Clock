/* Display the hours, minutes, and seconds.
-The clock should run by itself. (Hint: look at JavaScript setInterval function)
-Google "javascript date get time" to see the built-in JavaScript helpers you can use.
-The clock should automatically update the time every second.
*/

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




