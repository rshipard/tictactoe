let generateStartPlayerButton = document.querySelector('#generateStartPlayer')

generateStartPlayerButton.addEventListener('click', function (event) {
  let playerOneName = document.querySelector('#playerOneName').value
  let playerTwoName = document.querySelector('#playerTwoName').value
  let startplayerDisplay = document.querySelector('#startPlayer')
  let startPlayerRandomiser = Math.floor(Math.random() * 2)
  let playerArray = [playerOneName, playerTwoName]
  startPlayer = playerArray[startPlayerRandomiser]
  startplayerDisplay.textContent = startPlayer
})

// previous value = "x"
// now inside a funtion change previous value = "o" etc

let gridArray = [0,0,0,0,0,0,0,0,0]
