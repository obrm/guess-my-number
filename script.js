'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const messageColor = color => {
  document.querySelector('.message').style.color = color;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.guess').addEventListener('focus', function () {
  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (guess > 20 || guess < 1) {
      messageColor('red');
      displayMessage('😖 Input must be a number between 1 and 20!!!');
    } else if (guess === secretNumber) {
      messageColor('#eee');
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct number!!!');
      document.querySelector('.check').disabled = true;
      if (highScore < score) {
        document.querySelector('.highscore').textContent = score;
        highScore = score;
      }
    } else if (guess < secretNumber) {
      messageColor('#eee');
      displayMessage('📉 Too low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
      messageColor('#eee');
      displayMessage('📈 Too High!!!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    messageColor('#eee');
    score = 0;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'red';
    displayMessage('💥 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  messageColor('#eee');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
