const container = document.querySelector(".container");

function createDivs () {
    for(let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

createDivs();

// this is to check that the number of divs created is indeed 256
let numb = container.children.length;
console.log(numb);