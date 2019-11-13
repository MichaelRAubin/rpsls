let compChoice
let playerChoice
let resultElem = document.querySelector("#result")
let compChoiceElem = document.querySelector("#compChoiceText")
let rockWinElem = document.querySelector("#rock-win")
let paperWinElem = document.querySelector("#paper-win")
let scissorWinElem = document.querySelector("#scissors-win")
let lizardWinElem = document.querySelector("#lizard-win")
let spockWinElem = document.querySelector("#spock-win")


let choices = [
  {
    name: "rock",
    beats1: "scissors",
    beats2: "lizard",
    loses1: "paper",
    loses2: "spock",
    winCount: 0
  },
  {
    name: "paper",
    beats1: "rock",
    beats2: "spock",
    loses1: "scissors",
    loses2: "lizard",
    winCount: 0
  },
  {
    name: "scissors",
    beats1: "paper",
    beats2: "lizard",
    loses1: "rock",
    loses2: "spock",
    winCount: 0
  },
  {
    name: "lizard",
    beats1: "spock",
    beats2: "paper",
    loses1: "rock",
    loses2: "scissors",
    winCount: 0
  },
  {
    name: "spock",
    beats1: "scissors",
    beats2: "rock",
    loses1: "lizard",
    loses2: "paper",
    winCount: 0
  }
]

function play(playerChoiceIndex) {
  playerChoice = choices[playerChoiceIndex]
  compChoice = choices[Math.floor(Math.random() * 5)]
  console.log(playerChoice, compChoice)
  compChoiceElem.textContent = compChoice.name

  if (compChoice.name == playerChoice.beats1 || compChoice.name == playerChoice.beats2) {
    changeWinCount(playerChoice)
    resultElem.textContent = "You win!"
  } else if (compChoice.name == playerChoice.loses1 || compChoice.name == playerChoice.loses2) {
    resultElem.textContent = "You lose!"
  } else {
    resultElem.textContent = "You tied!"
  }
}

function changeWinCount(playerChoice) {
  playerChoice.winCount++
  if (playerChoice.name == "rock") {
    rockWinElem.textContent = playerChoice.winCount
  } else if (playerChoice.name == "paper") {
    paperWinElem.textContent = playerChoice.winCount
  } else if (playerChoice.name == "scissors") {
    scissorWinElem.textContent = playerChoice.winCount
  } else if (playerChoice.name == "lizard") {
    lizardWinElem.textContent = playerChoice.winCount
  }
  else {
    spockWinElem.textContent = playerChoice.winCount
  }
}

function reset() {
  choices[0].winCount = 0
  choices[1].winCount = 0
  choices[2].winCount = 0
  choices[3].winCount = 0
  choices[4].winCount = 0
  resultElem.textContent = "Result"
  compChoiceElem.textContent = ""
  drawScores()
}

function drawScores() {
  rockWinElem.textContent = choices[0].winCount.toString()
  paperWinElem.textContent = choices[0].winCount.toString()
  scissorWinElem.textContent = choices[0].winCount.toString()
  lizardWinElem.textContent = choices[0].winCount.toString()
  spockWinElem.textContent = choices[0].winCount.toString()
}

