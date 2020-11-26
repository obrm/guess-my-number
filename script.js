'use strict';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const createRandom = () => Math.trunc(Math.random() * 20) + 1;

const styleBody = color => (document.body.style.backgroundColor = color);

const changeNumberElement = (width, textContent) => {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = textContent;
};

const setScore = num => {
  document.querySelector('.score').textContent = num;
};

const changeCheckButton = bool => {
  document.querySelector('.check').disabled = bool;
};

let secretNumber = createRandom();
let score = 20;
let highScore = 0;

const messageColor = color => {
  document.querySelector('.message').style.color = color;
};

// document.querySelector('.guess').addEventListener('focus', function () {
//   console.log(secretNumber);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (guess > 20 || guess < 1) {
      messageColor('red');
      displayMessage('😖 Input must be a number between 1 and 20!!!');
    } else if (guess === secretNumber) {
      messageColor('#eee');
      styleBody('#60b347');
      changeNumberElement('30rem', secretNumber);
      displayMessage('🎉 Correct number!!!');
      changeCheckButton(true);
      if (highScore < score) {
        document.querySelector('.highscore').textContent = score;
        highScore = score;
      }
    } else if (guess !== secretNumber) {
      messageColor('#eee');
      guess < secretNumber
        ? displayMessage('📉 Too low!!!')
        : displayMessage('📈 Too High!!!');
      score--;
      setScore(score);
    }
  } else {
    messageColor('#eee');
    score = 0;
    setScore(score);
    styleBody('red');
    displayMessage('💥 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  changeCheckButton(false);
  messageColor('#eee');
  changeNumberElement('15rem', '?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  styleBody('#222');
  setScore(20);
  score = 20;
  secretNumber = createRandom();
});
