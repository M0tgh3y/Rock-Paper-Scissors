let commov = '';
let mymov = '';
let result = '';

const Score = {
    Win: 0,
    loss: 0,
    Tei: 0
};

function tabdilcom (randomN) {
    if (randomN >= 0 && randomN < 1 / 3) {
        commov = 'Rock';
    } else if (randomN >= 1 / 3 && randomN <= 2/3) {
        commov = 'Paper';
    } else if (randomN >= 2 / 3 && randomN <= 1) {
        commov = 'Scissors';
    }
    return commov
}

function javab(mymov, commov) {
    if (mymov === 'Rock' && commov === 'Paper') {
        result = 'Computer Win.';
        Score.loss++;
    } else if (mymov === 'Rock' && commov === 'Scissors') {
        result = 'You Win.';
        Score.Win++;
    } else if (mymov === 'Rock' && commov === 'Rock') {
        result = 'Tie.';
        Score.Tei++;
    } else if (mymov === 'Paper' && commov === 'Paper') {
        result = 'Tie.';
        Score.Tei++;
    } else if (mymov === 'Paper' && commov === 'Scissors') {
        result = 'Computer Win.';
        Score.loss++;
    } else if (mymov === 'Paper' && commov === 'Rock') {
        result = 'You Win.';
        Score.Win++;
    } else if (mymov === 'Scissors' && commov === 'Paper') {
        result = 'You Win.';
        Score.Win++;
    } else if (mymov === 'Scissors' && commov === 'Scissors') {
        result = 'Tie.';
        Score.Tei++;
    } else if (mymov === 'Scissors' && commov === 'Rock') {
        result = 'Computer Win.';
        Score.loss++;
    }
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${Score.Win} Losses: ${Score.loss} Ties: ${Score.Tei}`;
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =
        `You <img src="10-images/${mymov}-emoji.png" class="game-icon-pic">
        <img src="10-images/${commov}-emoji.png" class="game-icon-pic"> Computer`;
    return result;
}

document.querySelector('.js-score')
    .innerHTML = `Wins: ${Score.Win} Losses: ${Score.loss} Ties: ${Score.Tei}`;