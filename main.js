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

const arrayColors = ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue']



// previous value = "x"
// now inside a funtion change previous value = "o" etc

let gridArray = [0,0,0,0,0,0,0,0,0]
