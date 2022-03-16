const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index) {
    slide.style.left = `${index*100}%`;

});

let count = 0;
nextBtn.addEventListener("click", function() {
    count++;
    carousel();

});
prevBtn.addEventListener("click", function() {
    count--;
    carousel();

});

function carousel() {
    // if (count === slides.length) {
    //     count = 0;
    // }
    // if (count < 0) {
    //     count = slides.length - 1;
    // }
    if (count < slides.length - 1) {
        nextBtn.style.display = "block";

    } else {
        nextBtn.style.display = "none";
    }
    if (count > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}
prevBtn.style.display = "none";