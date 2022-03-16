const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    // checking for the dataset id on click event
    // console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    if (id) {
        // removing active class form all btns
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hiding contents
        content.forEach(function(item) {
            item.classList.remove("active");

        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }


});