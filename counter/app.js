let counter = document.getElementById("counter");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    counter.textContent = 0;
    color();
});

increase.addEventListener("click", function() {
    console.log(Number(counter.textContent) + 1)
    counter.textContent = Number(counter.textContent) + 1;
    color();
});
decrease.addEventListener("click", function() {
    console.log(Number(counter.textContent) - 1)
    counter.textContent = Number(counter.textContent) - 1;
    color();
});

function color() {
    if (counter.textContent > 0) {
        counter.style.color = "green";
    } else if (counter.textContent == 0) {
        counter.style.color = "rgb(74, 92, 107)";
    } else {
        counter.style.color = "red";
    }
}