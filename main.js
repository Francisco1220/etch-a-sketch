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

const childDivs = container.children;
console.log(childDivs);

function setClassOfChildDiv () {
    for(let i = 0; i < childDivs.length; i++) {
        childDivs[i].className= "childDiv";
    }
}

setClassOfChildDiv ();
