
const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', startChangeColor);
stopButton.addEventListener('click', stopChangeColor);

function startChangeColor() {
    startButton.disabled = true;
    intervalId = setInterval(() => {
        let randomColor = getRandomHexColor();
        randomBodyColor.style.background = randomColor;
    }, 1000);
};

function stopChangeColor() {
    startButton.disabled = false;
    clearInterval(intervalId);
};