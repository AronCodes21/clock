setInterval(function () {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();

  const hoursText = document.getElementById("hours");
  const minutesText = document.getElementById("minutes");
  const secondsText = document.getElementById("seconds");
  const daysText = document.getElementById("day");
  const amPm = document.getElementById("am-pm");

  function getTime() {
    function displayDay() {
      switch (day) {
        case 0:
          daysText.innerText = "Sunday";
          break;
        case 1:
          daysText.innerText = "Monday";
          break;
        case 2:
          daysText.innerText = "Tuesday";
          break;
        case 3:
          daysText.innerText = "Wednesday";
          break;
        case 4:
          daysText.innerText = "Tuesday";
          break;
        case 5:
          daysText.innerText = "Friday";
          break;
        case 6:
          daysText.innerText = "Saturday";
          break;
      }
    }

    function displayHours() {
      hoursText.innerText = hours;
      if (hours > 12) {
        hours -= 12;
        amPm.innerText = "PM";
      } else {
        amPm.innerText = "AM";
      }
      if (hours < 9) {
        hoursText.innerText = "0" + hours;
      }
    }

    function displayMinutes() {
      minutesText.innerText = minutes;
      if (minutes < 9) {
        minutesText.innerText = "0" + minutes;
      }
    }

    function displaySeconds() {
      secondsText.innerText = seconds;
      if (seconds < 9) {
        secondsText.innerText = "0" + seconds;
      }
    }

    displayDay();
    displayHours();
    displayMinutes();
    displaySeconds();
  }

  getTime();
}, 1000);
