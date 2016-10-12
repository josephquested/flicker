var flickerCharacters = ['Q', 'U', 'E', 'S', 'T', 'D', '3', '1', '7']
var audio = new Audio('./hum.mp3')

var minFlickerFrequency = 3000
var maxFlickerFrequency = 11000

var minFlickerSpeed = 100
var maxFlickerSpeed = 500

function renderHeader () {
  var title = document.getElementById("title")
  var text = "QUESTED.co"
  for (var i = 0; i < text.length; i++) {
    var h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(text[i]))
    title.appendChild(h1)
    initFlicker(h1)
  }
}

function initFlicker (node) {
  var originalCharacter = node.innerHTML
  window.setInterval(() => {
    flicker(node, originalCharacter)
  }, randomInt(minFlickerFrequency, maxFlickerFrequency));
}

function flicker (node, originalCharacter) {
  var flickerCharacter = flickerCharacters[randomInt(0, flickerCharacters.length - 1)]
  node.innerHTML = convertCharacter(originalCharacter, flickerCharacter)
  flickerColor(node)
  hum(true)

  setTimeout(() => {
    node.innerHTML = originalCharacter
    flickerColor(node)
    hum(false)
  }, randomInt(minFlickerSpeed, maxFlickerSpeed));
}

function flickerColor (node) {
  if (node.style.color !== 'white') {
    node.style.color = 'white'
  } else {
    node.style.color = 'red'
  }
}

function convertCharacter (originalCharacter, character) {
  if (originalCharacter === '.') return '.'
  if (originalCharacter == originalCharacter.toLowerCase()) {
    return randomInt(0, 1) == 0 ? 'c' : 'o'
  } else {
    return character
  }
}

function hum (play) {
  if (play) {
    audio.play()
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// init
renderHeader()
