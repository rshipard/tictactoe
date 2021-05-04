let startPlayer = ''
let turnCounter = 1
let playerMark = 'X'
let boardState = [1,1,1,1,1,1,1,1,1]
// note to self game will always start with first player using "x"

let generateStartPlayerButton = document.querySelector('#generateStartPlayer')

generateStartPlayerButton.addEventListener('click', function (event) {
  let playerOneName = document.querySelector('#playerOneName').value
  let playerTwoName = document.querySelector('#playerTwoName').value
  let startplayerDisplay = document.querySelector('#startPlayer')
  let startPlayerRandomiser = Math.floor(Math.random() * 2)
  let playerArray = [playerOneName, playerTwoName]
  playerColors = []
  startPlayer = playerArray[startPlayerRandomiser]
  startplayerDisplay.textContent = startPlayer + " is playing the X's, click a box to start then take turns selecting a box."
})

// REMEMBER to use slice to return portions of the array!!!!!!!


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
  if (checkOne != 1 && checkOne === checkTwo && checkTwo === checkThree) {
    console.log('row one win')
  } else if (checkFour != 1 && checkFour === checkFive && checkFive === checkSix) {
    console.log('row two win')
  } else if (checkSeven != 1 && checkSeven === checkEight && checkEight === checkNine) {
    console.log('row three win')
  } else if (checkOne != 1 && checkOne === checkFive && checkFive === checkNine) {
    console.log('diagonal victory')
  } else if (checkThree != 1 && checkThree === checkFive && checkFive === checkSeven) {
    console.log('diagonal victory')
  } else if (checkOne != 1 && checkOne === checkFour && checkFour === checkSeven) {
    console.log('column victory')
  } else if (checkTwo != 1 && checkTwo === checkFive && checkFive === checkEight) {
    console.log('column victory')
  } else if (checkThree != 1 && checkThree === checkSix && checkSix === checkNine) {
    console.log('column victory')
  } else if (turnCounter < 10) {
    console.log('keep playing')
  } else {
    console.log('no-one wins. The world ends.')
  }
}

function turnSwitcher () {
  if (turnCounter % 2 && turnCounter < 10) {
    playerMark = 'X'
    turnCounter++
    } else if (turnCounter < 10) {
    playerMark = 'O'
    turnCounter++
    } else {
      //note to self does turncounter need to be under 10 or 11? tired, need sleep, work brain work.
      console.log('game over to be coded...')
    }
}

//surely i can make a loop or something??? to fix this nonsense
let boxOne = document.querySelector('#box1')
let boxTwo = document.querySelector('#box2')
let boxThree = document.querySelector('#box3')
let boxFour = document.querySelector('#box4')
let boxFive = document.querySelector('#box5')
let boxSix = document.querySelector('#box6')
let boxSeven = document.querySelector('#box7')
let boxEight = document.querySelector('#box8')
let boxNine = document.querySelector('#box9')

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
