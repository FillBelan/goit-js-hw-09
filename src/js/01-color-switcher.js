function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const mainBody = document.querySelector('body');
let timer = null;


startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    mainBody.style.backgroundColor = getRandomHexColor()
  }, 1000);
}, {once: true});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});



// startBtn.addEventListener('click', () => {
//   timer = setInterval(() => {
//     mainBody.style.backgroundColor = getRandomHexColor()
//   }, 1000);
//   startBtn.setAttribute('disabled', 'disabled');
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timer);
// });

