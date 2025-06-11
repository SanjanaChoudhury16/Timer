let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let duration = 25 * 60;
let timer = duration;
let interval = null;

function updateDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateDisplay();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  timer = duration;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
