const container = document.querySelector(".container");

function createDivs () {
    for(let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

createDivs();

// Check that the number of divs created is indeed 256
let numb = container.children.length;
console.log(numb);

// set a class to all child divs of the parent div "container"

const childDivCollection = container.children;

function setClassOfChildDiv () {
    for(let i = 0; i < childDivCollection.length; i++) {
        childDivCollection[i].className= "childDiv";
    }
}

setClassOfChildDiv ();

for (let i = 0; i < childDivCollection.length; i++) {
    childDivCollection[i].addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor= "rgb(211, 211, 211)";
    });
}

const body = document.querySelector("body")
const btn = document.createElement("button");
body.appendChild(btn);

function getUserInput () {
    let userInput = prompt("Please enter the desired grid size (eg. '64' for a 64x64 grid)", "16");
    return userInput;
};

btn.addEventListener("click", () => {
    userInput = getUserInput ();
});

// STEPS to complete STEP 4 of project
// 1. User clicks button
// 2. prompt asks user for their desired grid size (eg. "64" for 64x64 grid)
// 3. existing grid is removed
// 4. new grid is generated (in the same total space as before so that you have a new sketchpad)