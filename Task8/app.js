(function() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`%c${i}`, `color: #ff0000`);
    } else {
      console.log(i);
    }
  }
})();
