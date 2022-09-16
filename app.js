/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = ''; // 'guess' or 'results'
let userPlay = ''; //'rock' or 'paper' or 'scissors'
let computerPlay = ''; //'rock' or 'paper' or 'scissors'
let result = ''; // 'win' or 'lose' or 'draw'

let wins = 0;
let losses = 0;
let draws = 0;
let totalPlays = 0;

// probability array
const choices = ['rock', 'paper', 'scissors'];

/* Actions */
function loadPage() {
    displayGuess();
}

/* User Play */
// get DOM
const throwRock = document.getElementById('throw-rock-button');
const throwPaper = document.getElementById('throw-paper-button');
const throwScissors = document.getElementById('throw-scissors-button');
const userPlaySection = document.getElementById('user-play-section');
const resultDisplay = document.getElementById('result-display');
const computerPlayResult = document.getElementById('computer-play-result');
const userPlayResult = document.getElementById('user-play-result');

// display
function displayGuess() {
    resultsSection.classList.add('hidden');
}

function playGame(userGuess) {
    gameState = 'results';
    userPlay = userGuess;
    computerPlay = getRandomItem(choices);
    totalPlays++;

    userPlayResult.textContent = userGuess;
    computerPlayResult.textContent = computerPlay;

    userPlaySection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    if (userPlay === computerPlay) {
        result = 'draw';
        draws++;
        resultDisplay.textContent = "It's a draw!";
    }
    if (userPlay === 'rock' && computerPlay === 'scissors') {
        result = 'win';
        wins++;
        resultDisplay.textContent = 'You won!';
    }
    if (userPlay === 'rock' && computerPlay === 'paper') {
        result = 'lose';
        losses++;
        resultDisplay.textContent = 'You lost.';
    }
    if (userPlay === 'paper' && computerPlay === 'rock') {
        result = 'win';
        wins++;
        resultDisplay.textContent = 'You won!';
    }
    if (userPlay === 'paper' && computerPlay === 'scissors') {
        result = 'lose';
        losses++;
        resultDisplay.textContent = 'You lost.';
    }
    if (userPlay === 'scissors' && computerPlay === 'rock') {
        result = 'lose';
        losses++;
        resultDisplay.textContent = 'You lost.';
    }
    if (userPlay === 'scissors' && computerPlay === 'paper') {
        result = 'win';
        wins++;
        resultDisplay.textContent = 'You won!';
    }

    displayResults();
    displayScorecard();
    console.log('user threw', userGuess);
    console.log('computer threw', computerPlay);
    console.log('result is', result);
    console.log('total plays', totalPlays);
    console.log(resultDisplay.textContent);
}

// event listeners
throwRock.addEventListener('click', () => {
    playGame('rock');
});
throwPaper.addEventListener('click', () => {
    playGame('paper');
});
throwScissors.addEventListener('click', () => {
    playGame('scissors');
});

/* Results */
// get DOM
const resultsSection = document.getElementById('results-section');
const playAgainButton = document.getElementById('play-again-button');

// display
function displayResults() {
    if (gameState === 'results') {
        userPlaySection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
}

function playAgain() {
    gameState = 'guess';
    userPlaySection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    loadPage();
}

// event listeners
playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Scoreboard  */
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const totalPlaysDisplay = document.getElementById('total-plays-display');

function displayScorecard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    totalPlaysDisplay.textContent = totalPlays;
}

/* Run page load code */
loadPage();
