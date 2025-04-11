const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const square = document.getElementById("square");

startButton.addEventListener("click", () => {
    square.style.animationPlayState = "running";
})

stopButton.addEventListener("click", () => {
    square.style.animationPlayState = "paused";
})