const container = document.querySelector(".container");

// set a class to all child divs of the parent div "container"

const childDivCollection = container.children;

function setClassOfChildDiv () {
    for(let i = 0; i < childDivCollection.length; i++) {
        childDivCollection[i].className= "childDiv";
    }
}

const body = document.querySelector("body")
const btn = document.createElement("button");
body.appendChild(btn);

btn.textContent="Choose Grid Size";

function getUserInput () {
    let userInput= prompt("Please enter the desired grid size (eg. '64' for a 64x64 grid)", "16");
    return userInput;
};

btn.addEventListener("click", () => {
    // existing grid is removed here by using the replaceChildren() method
     container.replaceChildren();
     let gridSize = getUserInput ();
     if (gridSize > 100) {
        alert("Number too large. Please choose a smaller number");
    } else if (isNaN(gridSize) == true) {
        alert("Not a number. Please choose a number");
    } else {
        function createDivs (gridSize) {
            for(let i = 0; i < gridSize * gridSize; i++) {
                const newDiv = document.createElement("div");
                container.appendChild(newDiv);
            }
        }
        createDivs(gridSize);
    }
    setClassOfChildDiv ();
    for (let i = 0; i < childDivCollection.length; i++) {
        childDivCollection[i].addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor= "rgba(0, 0, 0, 0.6)";
        });
    }
    // set width and height of child div based on chosen grid size
    for (let i = 0; i < childDivCollection.length; i++) {
        childDivCollection[i].style.width=`${100/gridSize}%`;
        childDivCollection[i].style.height=`${100/gridSize}%`;
    }
});