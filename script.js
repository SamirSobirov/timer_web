let timer = null;
let time = 0;

function startTimer() {
  if (timer === null) {
    timer = setInterval(function () {
      time++;
      document.getElementById("timer").innerHTML = formatTime(time);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  document.getElementById("timer").innerHTML = formatTime(time);
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  return pad(minutes) + ":" + pad(seconds);
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

function setTimer() {
  var inputTime = parseInt(document.getElementById("inputTime").value);
  if (!isNaN(inputTime)) {
    time = inputTime;
    document.getElementById("timer").innerHTML = formatTime(time);
    resetTimer();
  }
}