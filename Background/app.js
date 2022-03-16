let colors = ["red", "cornflowerblue", "gray", "yellow", "pink"];
let color = document.getElementById("color");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    let randomNumber = getRandom();
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}