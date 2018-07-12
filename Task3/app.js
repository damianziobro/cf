(function () {
  const closeWindowBtn = document.querySelector("#close-window-btn");
  const showWindowBtn = document.querySelector("#show-window-btn");
  const changeTextBtn = document.querySelector("#change-text-btn");


  closeWindowBtn.addEventListener("click", event => closeWindow(event));
  showWindowBtn.addEventListener("click", event => showWindow());
  changeTextBtn.addEventListener("click", event => changeText());

  function closeWindow(event) {
    event.target.parentElement.style.display = "none";
  }

  function showWindow() {
    const window = document.querySelector("#window");
    window.style.display = "flex";
  }

  function changeText() {
    const text = document.querySelector("#text");
    text.innerHTML = "Javascript";
  }
})();
