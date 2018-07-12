(function () {
  let currentNumber = 0;
  const number = document.querySelector("#number");
  const numberIntervalId = window.setInterval(updateCurrentNumber, 10);

  function updateCurrentNumber() {
    if (currentNumber < 500) {
      currentNumber++;
      reRenderNumber(currentNumber, number);
    } else {
      window.clearInterval(numberIntervalId);
    }
  }

  function reRenderNumber(currentNumber, number) {
    number.innerHTML = currentNumber;
  }
})();
