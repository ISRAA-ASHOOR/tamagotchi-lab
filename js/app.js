/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0,
};

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat');
console.log(boredomStatEl);
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');
const playBtnEl = document.querySelector('#play');
console.log(playBtnEl);
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');
const gameMessageEl = document.querySelector('#message');
console.log(gameMessageEl);
const resetBtnEl = document.querySelector('#restart');
console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/

const runGame = () => {
    // console.log('the game is running!');
    updateStates();
    checkGameOver();
    render();
};

const render = () => {
    boredomStatEl.textContent = `${state.boredom}`;
    hungerStatEl.textContent = `${state.hunger}`;
    sleepinessStatEl.textContent = `${state.sleepiness}`;
    if (gameOver === 'true') {
        clearInterval(timer);
        resetBtnEl.classList.remove("hidden");
        gameMessageEl.classList.remove("hidden");
    };
};

const updateStates = () => {
    for (let key in state) {
    const randomToThree = Math.floor(Math.random() * 4);
    state[key] += randomToThree ;
    };
    console.log(state);
};

const checkGameOver = () => {
    if (state.boredom === 10 || state.hunger === 10 || state.sleepiness === 10) {
        gameOver = 'true';
    };
};

const playBtnClick = () => {
    state.boredom = 0;
    render();
};

const feedBtnClick = () => {
    state.hunger = 0;
    render();
};

const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
};

const init = () => {
    resetBtnEl.classList.add("hidden");
    gameMessageEl.classList.add("hidden");
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = 'false';
    timer = setInterval(runGame, 2000);
    render();
};

init();

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#boredom-stat').addEventListener('click', init);
document.querySelector('#hunger-stat').addEventListener('click', init);
document.querySelector('#sleepiness-stat').addEventListener('click', init);

playBtnEl.addEventListener('click', () => {
    playBtnClick();
});

feedBtnEl.addEventListener('click', () => {
    feedBtnClick();
});

sleepBtnEl.addEventListener('click', () => {
    sleepBtnClick();
});

resetBtnEl.addEventListener('click', () => {
    init();
});