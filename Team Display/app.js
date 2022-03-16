let team = [{
        id: 1,
        name: "Yunsu Isah",
        job: "Full-Stack Dev",
        image: "./pic.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem"
    },
    {
        id: 2,
        name: "Umar Adamu Harande",
        job: "Machine Learning Engr.",
        image: "./umar.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem"
    },
    {
        id: 3,
        name: "Tanimu Bashir",
        job: "Network Engr.",
        image: "./bashir.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem"
    },
    {
        id: 4,
        name: "Aminu Bello",
        job: "AI Engr.",
        image: "./aminu.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis natus, adipisci quae illo perferendis numquam perspiciatis explicabo minus facilis consequuntur corrupti ab voluptatem"
    }
]
let image = document.querySelector(".profile-img");
let author = document.querySelector(".author");
let job = document.querySelector(".job");
let info = document.querySelector(".info");
// buttons.....
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let suprise = document.querySelector(".suprise");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    getPerson();

});

right.addEventListener("click", function() {
    currentItem++;
    if (currentItem > team.length - 1) {
        currentItem = 0;
    }
    getPerson();
    console.log(currentItem);

});
left.addEventListener("click", function() {
    currentItem -= 1;
    if (currentItem < 0) {
        currentItem = team.length - 1;
    }
    getPerson();
    console.log(currentItem);

});
suprise.addEventListener("click", function() {
    currentItem = getRandomPerson();
    getPerson();
    console.log(currentItem);
})

function getPerson() {
    person = team[currentItem];
    image.src = person.image;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;
}

function getRandomPerson() {
    return Math.floor(Math.random() * team.length);
}