'use strict';

const createRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeBodyBGColor = color =>
  (document.body.style.backgroundColor = color);

const changeNumberElement = (width, textContent) => {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = textContent;
};

const setScore = num => {
  document.querySelector('.score').textContent = num;
};

const changeCheckButtonState = bool => {
  document.querySelector('.check').disabled = bool;
};

const changeMessageTextColor = color => {
  document.querySelector('.message').style.color = color;
};

let secretNumber = createRandomNumber();
let score = 20;
let highScore = 0;

// document.querySelector('.guess').addEventListener('focus', function () {
//   console.log(secretNumber);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (guess > 20 || guess < 1) {
      changeMessageTextColor('red');
      displayMessage('😖 Input must be a number between 1 and 20!!!');
    } else if (guess === secretNumber) {
      changeMessageTextColor('#eee');
      changeBodyBGColor('#60b347');
      changeNumberElement('30rem', secretNumber);
      displayMessage('🎉 Correct number!!!');
      changeCheckButtonState(true);
      if (highScore < score) {
        document.querySelector('.highscore').textContent = score;
        highScore = score;
      }
    } else if (guess !== secretNumber) {
      changeMessageTextColor('#eee');
      guess < secretNumber
        ? displayMessage('📉 Too low!!!')
        : displayMessage('📈 Too High!!!');
      score--;
      setScore(score);
    }
  } else {
    changeMessageTextColor('#eee');
    score = 0;
    setScore(score);
    changeBodyBGColor('red');
    displayMessage('💥 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  changeCheckButtonState(false);
  changeMessageTextColor('#eee');
  changeNumberElement('15rem', '?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  changeBodyBGColor('#222');
  setScore(20);
  score = 20;
  secretNumber = createRandomNumber();
});
