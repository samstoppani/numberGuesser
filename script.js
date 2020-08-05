let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function getAbsoluteDistance(pointA, pointB) {
    return Math.abs(pointA - pointB)
}

function compareGuesses(user, computer, target) {
    let userDiff = getAbsoluteDistance(target, user)
    let computerDiff = getAbsoluteDistance(target, computer)

    return userDiff <= computerDiff ? true : false
}

function updateScore(winner) {
    if (winner == 'human') {
        humanScore++
    } else {
        computerScore++
    }
}

function advanceRound() {
    currentRoundNumber++
}