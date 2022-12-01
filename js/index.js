const drumkitContainer = document.getElementById("drumkit")

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

// returns a drumkit element, with a button and a click eventlistener attached.
function drum(folder, soundFile) {
  const sound = new Audio(folder + soundFile)
  const buttonElement = document.createElement("button")
  buttonElement.textContent = soundFile
  // add event listener:
  buttonElement.addEventListener("click", () => sound.play())

  return buttonElement
}
// map drum elements to an array:
const drumElements = soundMaps.map(sound => drum(soundFolder, sound.sound))
// ... extracts contents of the array:
drumkitContainer.append(...drumElements)


window.addEventListener("keydown", (event) => {
  // check if they key that has been pressed exists in the soundMaps array
  const validKey = soundMaps.find(soundObj => soundObj.keyCode === event.key)
  if (validKey) {
    // create an audio element, and call the .play() method.
    const sound = new Audio(soundFolder + validKey.sound)
    sound.play()
  }
})