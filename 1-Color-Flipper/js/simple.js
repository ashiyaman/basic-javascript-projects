var colors = ["red", "blue", "green", "yellow", "gray", "orange", "purple"];

var btn = document.querySelector("#btn");
var container = document.querySelector("main");
var colorCodeContainer = document.querySelector("#color-code");

btn.addEventListener("click", function () {
    var randomColor = colors[getRandomNumber()];
    container.style.backgroundColor = randomColor;
    colorCodeContainer.innerHTML = randomColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}