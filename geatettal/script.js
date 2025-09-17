let min, max, guess, attempts;

const startBtn = document.getElementById("startBtn");
const tooLowBtn = document.getElementById("tooLowBtn");
const tooHighBtn = document.getElementById("tooHighBtn");
const correctBtn = document.getElementById("correctBtn");
const guessEl = document.getElementById("guess");
const resultEl = document.getElementById("result");
const gameDiv = document.getElementById("game");

function newGuess() {
  guess = Math.floor((min + max) / 2);
  guessEl.textContent = `Mit gæt er: ${guess}`;
  guessEl.classList.remove("bump");
  void guessEl.offsetWidth; // restart animation
  guessEl.classList.add("bump");
  attempts++;
  tooLowBtn.disabled = false;
  tooHighBtn.disabled = false;
  correctBtn.disabled = false;
}

startBtn.addEventListener("click", () => {
  min = 0;
  max = 100;
  attempts = 0;
  gameDiv.style.display = "block";
  resultEl.textContent = "";
  newGuess();
  startBtn.disabled = true;
});

tooLowBtn.addEventListener("click", () => {
  min = guess + 1;
  disableButtons();
  newGuess();
});

tooHighBtn.addEventListener("click", () => {
  max = guess - 1;
  disableButtons();
  newGuess();
});

correctBtn.addEventListener("click", () => {
  guessEl.textContent = `Yes! Jeg gættede det: ${guess}`;
  resultEl.textContent = `Jeg brugte ${attempts} gæt 🎉`;
  disableButtons();
  startBtn.disabled = false;
});

function disableButtons() {
  tooLowBtn.disabled = true;
  tooHighBtn.disabled = true;
  correctBtn.disabled = true;
}
