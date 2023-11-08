// JavaScript Document
console.log("The ship is sailing!");

var currentTime = new Date().getHours();
var greeting;

console.log(new Date().getHours());

if (currentTime >= 18) {
    greeting = "Good evening";
} else if (currentTime >= 12) {
    greeting = "Good afternoon";
} else if (currentTime >= 5) {
    greeting = "Good morning";
} else {
    greeting = "Good night";
}

document.querySelector("#greeting").textContent = greeting;



const audioPlayer = document.querySelector("#audioPlayer");
const playButtons = document.querySelectorAll(".play, .play-button");

function toggleAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

playButtons.forEach(button => {
    button.addEventListener("click", toggleAudio);
});