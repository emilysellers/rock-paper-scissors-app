/* Imports */

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let userPlay = ''; //'rock' or 'paper' or 'scissors'
let computerPlay = ''; //'rock' or 'paper' or 'scissors'
let result = ''; // 'win' or 'lose' or 'draw'

/* Actions */
function loadPage() {
    displayPlay();
    displayResults();
    // displayScorecard();
}

/* User Play */
// get DOM
const throwRock = document.getElementById('throw-rock-button');
const throwPaper = document.getElementById('throw-paper-button');
const throwScissors = document.getElementById('throw-scissors-button');
const userPlaySection = document.getElementById('user-play-section');

// display
function displayPlay() {
    resultsSection.classList.add('hidden');
}

// event listeners
throwRock.addEventListener('click', () => {});
throwPaper.addEventListener('click', () => {});
throwScissors.addEventListener('click', () => {});

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
// event listeners

/* Run page load code */
loadPage();
