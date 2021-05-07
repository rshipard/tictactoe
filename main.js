let startPlayer = ''
let secondPlayer = ''
let turnCounter = 1
let playerMark = ''
let boardState = [1,1,1,1,1,1,1,1,1]
let winnerSymbol = ''
// note to self game will always start with first player using "x"

let generateStartPlayerButton = document.querySelector('#generateStartPlayer')

generateStartPlayerButton.addEventListener('click', function (event) {
  let playerOneName = document.querySelector('#playerOneName').value
  let playerTwoName = document.querySelector('#playerTwoName').value
  let startplayerDisplay = document.querySelector('#startPlayer')
  if (playerOneName === '' || playerTwoName === '') {
    startplayerDisplay.textContent = 'You must fill in both the Player\'s names. If you don\'t have a friend, pet or hostage, make one up!'
    return
  }
  let startPlayerRandomiser = Math.floor(Math.random() * 2)
  let playerArray = [playerOneName, playerTwoName]
  startPlayer = playerArray[startPlayerRandomiser]
  playerMark = 'X'
  secondPlayerIs()
  startplayerDisplay.textContent = startPlayer + " goes first with 'X', then " + secondPlayer + " who is play with 'O'. The game will automatically switch for you."
})

function secondPlayerIs () {
  let playerOneName = document.querySelector('#playerOneName').value
  let playerTwoName = document.querySelector('#playerTwoName').value
  let playerArray = [playerOneName, playerTwoName]
  if (startPlayer === playerArray[0]) {
    secondPlayer = playerArray[1]
  } else {
    secondPlayer = playerArray[0]
  }
}

function winnerMessage () {
  if (winnerSymbol === 'X') {
    winnerDisplay.textContent = startPlayer + ' has Won!'
    playerMark = "Game Over"
  } else if (winnerSymbol === 'O') {
    winnerDisplay.textContent = secondPlayer + ' has Won!'
    playerMark = "Game Over"
  } else {
    winnerDisplay.textContent = 'Cut that out! The game has ended.'
  }
}

function checkWinConditions () {
  let checkOne = boardState[0]
  let checkTwo = boardState[1]
  let checkThree = boardState[2]
  let checkFour = boardState[3]
  let checkFive = boardState[4]
  let checkSix = boardState[5]
  let checkSeven = boardState[6]
  let checkEight = boardState[7]
  let checkNine = boardState[8]
  if (playerMark !== '') {
    if (checkOne != 1 && checkOne === checkTwo && checkTwo === checkThree) {
      winnerSymbol = checkOne
      winnerMessage(winnerSymbol)    
    } else if (checkFour != 1 && checkFour === checkFive && checkFive ===   checkSix) {
      winnerSymbol = checkFour
      winnerMessage(winnerSymbol)
    } else if (checkSeven != 1 && checkSeven === checkEight && checkEight === checkNine) {
      winnerSymbol = checkSeven
      winnerMessage(winnerSymbol)
    } else if (checkOne != 1 && checkOne === checkFive && checkFive === checkNine) {
      winnerSymbol = checkOne
      winnerMessage(winnerSymbol)
    } else if (checkThree != 1 && checkThree === checkFive && checkFive === checkSeven) {
      winnerSymbol = checkThree
      winnerMessage(winnerSymbol)
    } else if (checkOne != 1 && checkOne === checkFour && checkFour === checkSeven) {
      winnerSymbol = checkOne
      winnerMessage(winnerSymbol)
    } else if (checkTwo != 1 && checkTwo === checkFive && checkFive === checkEight) {
      cwinnerSymbol = checkTwo
      winnerMessage(winnerSymbol)
    } else if (checkThree != 1 && checkThree === checkSix && checkSix === checkNine) {
      winnerSymbol = checkThree
      winnerMessage(winnerSymbol)
    } else if (turnCounter < 10) {
      } else {
        winnerDisplay.textContent = 'It\'s a draw, no-one has Won!'
        playerMark = 'Game Over'
    }
  }

}

function turnSwitcher () {
  if (playerMark === '') {
    let winnerDisplay = document.querySelector('#winnerDisplay')
    winnerDisplay.textContent = "Names people! The game can't start until we have names!"
  } else  if (turnCounter % 2 && turnCounter < 10) {
    playerMark = 'X'
    turnCounter++
  } else if (turnCounter < 10) {
    playerMark = 'O'
    turnCounter++
  }
}

let gameboard = document.querySelectorAll('.gameboard div')

for ( let i = 0; i < gameboard.length; i++) {
  let currentBox = gameboard[i]
  currentBox.addEventListener('click', function () {
    if (currentBox.innerText != 'x' && currentBox.innerText != 'o') {
      turnSwitcher()
      currentBox.innerText = playerMark
      boardState.splice([i], 1, playerMark)
      checkWinConditions()
    }
  })
}



/*
boxOne.addEventListener('click', function () {
  if (boxOne.innerText != 'x' && boxOne.innerText != 'o') {
    turnSwitcher()
    boxOne.innerText = playerMark
    boardState.splice(0, 1, playerMark)
    checkWinConditions()
  }
})

boxTwo.addEventListener('click', function () {
  if (boxTwo.innerText != 'x' && boxTwo.innerText != 'o') {
    turnSwitcher()
    boxTwo.innerText = playerMark
    boardState.splice(1, 1, playerMark)
    checkWinConditions()
  }
})

boxThree.addEventListener('click', function () {
  if (boxThree.innerText != 'x' && boxThree.innerText != 'o') {
    turnSwitcher()
    boxThree.innerText = playerMark
    boardState.splice(2, 1, playerMark)
    checkWinConditions()
  }
})

boxFour.addEventListener('click', function () {
  if (boxFour.innerText != 'x' && boxFour.innerText != 'o') {
    turnSwitcher()
    boxFour.innerText = playerMark
    boardState.splice(3, 1, playerMark)
    checkWinConditions()
  }
})

boxFive.addEventListener('click', function () {
  if (boxFive.innerText != 'x' && boxFive.innerText != 'o') {
    turnSwitcher()
    boxFive.innerText = playerMark
    boardState.splice(4, 1, playerMark)
    checkWinConditions()
  }
})

boxSix.addEventListener('click', function () {
  if (boxSix.innerText != 'x' && boxSix.innerText != 'o') {
    turnSwitcher()
    boxSix.innerText = playerMark
    boardState.splice(5, 1, playerMark)
    checkWinConditions()
  }
})

boxSeven.addEventListener('click', function () {
  if (boxSeven.innerText != 'x' && boxSeven.innerText != 'o') {
    turnSwitcher()
    boxSeven.innerText = playerMark
    boardState.splice(6, 1, playerMark)
    checkWinConditions()
  }
})

boxEight.addEventListener('click', function () {
  if (boxEight.innerText != 'x' && boxEight.innerText != 'o') {
    turnSwitcher()
    boxEight.innerText = playerMark
    boardState.splice(7, 1, playerMark)
    checkWinConditions()
  }
})

boxNine.addEventListener('click', function () {
  if (boxNine.innerText != 'x' && boxNine.innerText != 'o') {
    turnSwitcher()
    boxNine.innerText = playerMark
    boardState.splice(8, 1, playerMark)
    checkWinConditions()
  }
})

*/

/*
function winCheck () {
  if (checkOne === 'X') {
    winnerDisplay.textContent = startPlayer + ' has Won!'
  } else if (checkOne === 'O') {
    winnerDisplay.textContent = secondPlayer + ' has Won!'
  } else if (checkOne === '') {
    winnerDisplay.textContent = "The game hasn't started yet. Please fill in the player's names and click the button."
  } else {
    winnerDisplay.textContent = 'Cut that out! The game has ended.'
  }
}
*/