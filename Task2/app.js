(function() {
  const square = document.querySelector("#square");
  const initialEdgeSize = parseInt(square.style.width);

  square.addEventListener("click", event => doubleSquareSize(event.target));
  square.addEventListener("mouseleave", event =>
    reduceToInitialSquareSize(event.target)
  );

  function doubleSquareSize(square) {
    const doubledEdgeSize = `${initialEdgeSize * 2}px`;
    square.style.width = doubledEdgeSize;
    square.style.height = doubledEdgeSize;
  }

  function reduceToInitialSquareSize(square) {
    square.style.width = `${initialEdgeSize}px`;
    square.style.height = `${initialEdgeSize}px`;
  }
})();
