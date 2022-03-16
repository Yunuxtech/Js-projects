//using selectors inside the element

let questions = document.querySelectorAll(".question");
questions.forEach(function(question) {
    let btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }

        });
        question.classList.toggle("show-text");

    });

});






// second solution below


// traversing the dom
// let buttons = document.querySelectorAll(".question-btn");

// buttons.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         let Question = e.currentTarget.parentElement.parentElement;
//         Question.classList.toggle("show-text");
//     });

// });