let generateStartPlayerButton = document.querySelector('#generateStartPlayer')

generateStartPlayerButton.addEventListener('click', function (event) {
  let playerOneName = document.querySelector('#playerOneName').value
  let playerTwoName = document.querySelector('#playerTwoName').value
  let startplayerDisplay = document.querySelector('#startPlayer')
  let startPlayerRandomiser = Math.floor(Math.random() * 2)
  let playerArray = [playerOneName, playerTwoName]
  playerColors = []
  startPlayer = playerArray[startPlayerRandomiser]
  startplayerDisplay.textContent = startPlayer + " who will start by playing blue, click on a square to start, then take turns clicking on the squares."
})

let turnCounter = 0
let playerMark = 'x'

// need to narrow this down to the cells
// then create so it won't iterate if the div has a value
// also get the css to centre the text within the div
let gameboardAction = document.querySelector('.gameboard')
gameboardAction.addEventListener('click', function () {
  if (turnCounter % 2) {
    turnCounter++
    playerMark = 'x'
    } else {
    turnCounter++
    playerMark = 'o'
    }
})

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
    boxOne.innerText = playerMark
  }
})

boxTwo.addEventListener('click', function () {
  if (boxTwo.innerText != 'x' && boxTwo.innerText != 'o') {
    boxTwo.innerText = playerMark
  }
})

boxThree.addEventListener('click', function () {
  if (boxThree.innerText != 'x' && boxThree.innerText != 'o') {
    boxThree.innerText = playerMark
  }
})

boxFour.addEventListener('click', function () {
  if (boxFour.innerText != 'x' && boxFour.innerText != 'o') {
    boxFour.innerText = playerMark
  }
})

boxFive.addEventListener('click', function () {
  if (boxFive.innerText != 'x' && boxFive.innerText != 'o') {
    boxFive.innerText = playerMark
  }
})

boxSix.addEventListener('click', function () {
  if (boxSix.innerText != 'x' && boxSix.innerText != 'o') {
    boxSix.innerText = playerMark
  }
})

boxSeven.addEventListener('click', function () {
  if (boxSeven.innerText != 'x' && boxSeven.innerText != 'o') {
    boxSeven.innerText = playerMark
  }
})

boxEight.addEventListener('click', function () {
  if (boxEight.innerText != 'x' && boxEight.innerText != 'o') {
    boxEight.innerText = playerMark
  }
})

boxNine.addEventListener('click', function () {
  if (boxNine.innerText != 'x' && boxNine.innerText != 'o') {
    boxNine.innerText = playerMark
  }
})

/* let clickTest = document.querySelector('.gameboard')
clickTest.addEventListener('click', function (){
  if (turnCounter % 2) {
    console.log('x')
    turnCounter++
    console.log(turnCounter)
    } else {
    console.log('o')
    turnCounter++
    console.log(turnCounter)
    }
})
*/
