
const bodyChangeColor = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
startButton.addEventListener('click', startChangeColor);
stopButton.addEventListener('click', stopChangeColor);
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



function startChangeColor() {
   startButton.disabled = true;
    intervalId = setInterval(() => {
        let randomColor = getRandomHexColor();
        bodyChangeColor.style.background = randomColor;
    }, 1000);
};

function stopChangeColor() {
    startButton.disabled = false;
    clearInterval(intervalId);
};