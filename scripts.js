let resultGame = document.querySelector('.result')
let humanScore = document.querySelector('#human-point')
let machineScore = document.querySelector('#machine-point')


let humanScoreNumber = 0
let machineScoreNumber = 0




const playHuman = (humanChoice) => {

    winnerGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const winnerGame = (human, machine) => {
    if (human === machine) {
        
        resultGame.innerHTML = 'Empatou'
    
    } else if (human === 'paper' && machine === 'rock' ||
       
    human === 'rock' && machine === 'scissors' ||
        
    human === 'scissors' && machine === 'paper') {
       humanScoreNumber++
       humanScore.innerHTML = humanScoreNumber
        resultGame.innerHTML = 'Parabéns voce ganhou'
    
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultGame.innerHTML = 'Que pena você perdeu'
    }
}