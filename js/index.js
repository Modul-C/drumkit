const drumkitContainer = document.getElementById("drumkit")

let currentSoundBeingPlayed = null

const soundFolder = "sounds/"
const soundMaps = [
  {sound: "clap.wav", keyCode: "q"},
  {sound: "hihat.wav", keyCode: "w"},
  {sound: "kick.wav", keyCode: "e"},
  {sound: "openhat.wav", keyCode: "r"},
  {sound: "ride.wav",keyCode: "t"},
  {sound: "snare.wav",keyCode: "y"},
  {sound: "tink.wav",keyCode: "u"},
  {sound: "tom.wav", keyCode: "i"}
]


function test(data) {

  console.log(
    typeof data
  )

  if (typeof data == "function") {
    data()
  }

  //data()
}

//test("something")
//test(1)
//test([1,2])
//test({id: 2})
test( something )
//

function something() {
  return true
}

// returns a drumkit element, with a button and a click eventlistener attached.
function drum(folder, soundFile) {
  const sound = new Audio(folder + soundFile)
  const buttonElement = document.createElement("button")
  buttonElement.textContent = soundFile
  buttonElement.id = soundFile
  // add event listener (pointerdown is similar to: mousedown):
  buttonElement.addEventListener("pointerdown", () => {

    buttonElement.style = `
      filter: hue-rotate(120deg);
      border-color: #fff;
      box-shadow: inset 0px 0px 1px 2px #000;`

    sound.play()
    currentSoundBeingPlayed = soundFile
  })

  buttonElement.addEventListener("pointerup", () => {
    buttonElement.style = `
      filter: none;
      border-color: #0ff;
      box-shadow: inset 0px -2px 2px 2px #000;`

    currentSoundBeingPlayed = null
  })

  return buttonElement
}
// map drum elements to an array:
const drumElements = soundMaps.map(sound => drum(soundFolder, sound.sound))
// ... extracts contents of the array:
drumkitContainer.append(...drumElements)


window.addEventListener("keydown", (event) => {
  // check if they key that has been pressed exists in the soundMaps array
  const validKey = soundMaps.find(function(soundObj) {
    return soundObj.keyCode === event.key
  })

  if (validKey) {

    const buttonElement = document.getElementById(validKey.sound)
    buttonElement.style = `
      filter: hue-rotate(120deg);
      border-color: #fff;
      box-shadow: inset 0px 0px 1px 2px #000;`

    // create an audio element, and call the .play() method.
    const sound = new Audio(soundFolder + validKey.sound)
    sound.play()

    currentSoundBeingPlayed = validKey.sound
  }
})

window.addEventListener("keyup", (event) => {

  /* const allButtons = document.querySelectorAll("button")
  allButtons.forEach(button => {
    button.style = `
      filter: none;
      border-color: #0ff;
      box-shadow: inset 0px -2px 2px 2px #000;` 
  }) */


  console.log(currentSoundBeingPlayed)

  const buttonElement = document.getElementById(currentSoundBeingPlayed)
  buttonElement.style = `
      filter: none;
      border-color: #0ff;
      box-shadow: inset 0px -2px 2px 2px #000;`

  currentSoundBeingPlayed = null
})