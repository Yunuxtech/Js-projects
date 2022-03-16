let toggele = document.getElementById("toggle");
let times = document.getElementById("times");
let sidebar = document.querySelector(".container");
// console.log(toggele);
// console.log(times);

toggele.addEventListener("click", function() {
    // console.log(sidebar.classList);
    sidebar.classList.toggle("show");
    console.log(sidebar.classList);

});
times.addEventListener("click", function() {
    sidebar.classList.remove("show");
});