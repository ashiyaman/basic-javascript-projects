var colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var btn = document.querySelector("#btn");
var container = document.querySelector("main");
var colorCodeContainer = document.querySelector("#color-code");

btn.addEventListener("click", function () {
    var randomColor = getRandomHex();
    container.style.backgroundColor = "#" + randomColor;
    colorCodeContainer.innerHTML = "#" + randomColor;
})

function getRandomHex() {
    var hex = "";
    for (var i = 0; i < 6; i++) {
        var randomIndex= Math.floor(Math.random() * colors.length);
        hex += colors[randomIndex];
    }
    return hex;
}