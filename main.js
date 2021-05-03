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



let turnCounter = 1



let clickTest = document.querySelector('.gameboard')

clickTest.addEventListener('click', function (){
  if (turnCounter % 2) {
    console.log('x')
    turnCounter++
    } else {
    console.log('o')
    turnCounter++
    }
})