(function () {
  let currentTime = 0;
  const timer = document.querySelector("#timer");

  const timerIntervalId = window.setInterval(updateCurrentTime, 1000);

  function updateCurrentTime() {
    currentTime++;
    reRenderTimer(currentTime, timer);
  }

  function reRenderTimer(currentTime, timer) {
    const seconds = formatTime(Math.floor(currentTime % 60));
    const minutes = formatTime(Math.floor((currentTime / 60) % 60));
    const hours = formatTime(Math.floor((currentTime / 3600) % 24));
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
})();
