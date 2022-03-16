// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let modalBtn = document.querySelector(".modal-btn");
let modalOverLay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function() {

    modalOverLay.classList.toggle("open-modal");
    // the toggle remove and add class name from an element
    console.log(modalOverLay.classList);
    // you can also use classlist.add()


});

closeBtn.addEventListener("click", function() {
    modalOverLay.classList.remove("open-modal")


});