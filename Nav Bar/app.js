let toggle = document.getElementById("toggle");
let collapse = document.getElementById("collapse");


toggle.addEventListener("click", function() {
    // console.log(collapse.classList);
    // if (collapse.classList.contains("show")) {
    //     collapse.classList.remove("show");
    //     collapse.classList.add("hide");
    //     console.log(collapse.classList);
    // } else if (collapse.classList.contains("hide")) {
    //     collapse.classList.remove("hide");
    //     collapse.classList.add("show");
    //     console.log(collapse.classList);
    // }
    collapse.classList.toggle("hide");
    console.log(collapse.classList)
});