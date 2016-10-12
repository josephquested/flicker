var flickerCharacters = ['$', '#', 'X', '†', '¥', 'œ', '∑']
var audio = new Audio('./hum.mp3')

var minFlickerFrequency = 3000
var maxFlickerFrequency = 10000

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
  node.innerHTML = flickerCharacter
  flickerColor(node)
  hum(true)

  setTimeout(() => {
    node.innerHTML = originalCharacter
    flickerColor(node)
    hum(false)
  }, 300);
}


// helpers
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flickerColor (node) {
  if (node.style.color !== 'white') {
    node.style.color = 'white'
  } else {
    node.style.color = 'red'
  }
}

// function humAudio () {
//   var audio = new Audio('./hum.mp3')
//   window.setInterval(() => {
//   }, 2000);
//   audio.play()
// }

function hum (play) {
  if (play) {
    audio.play()
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

// init
renderHeader()
humAudio()
