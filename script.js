const container = document.querySelector(".sketch-container");
const emptyDiv = document.querySelector(".empty-div");
const buttons = document.querySelectorAll("button");

// Define function to create a sketch-box
function createSketchBox (input = 16) {
    emptyDiv.style.width = `${640 / input}px`;
    emptyDiv.style.height = `${640 / input}px`;
    emptyDiv.style.backgroundColor = "gray";
    container.value = input;
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            container.appendChild(emptyDiv.cloneNode());
        }
    }
};

// Define function to remove sketch-box
function removeSketchBox (input) {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            container.removeChild(container.lastElementChild);
        }
    }
};

createSketchBox();

//Remove surplus empty div
container.removeChild(container.lastElementChild);

// Remove previous sketch-box. Create new sketch-box according to clicked button value
buttons.forEach(button => {
    button.addEventListener("click", event => {
        removeSketchBox(container.value);
        createSketchBox(event.target.value);
    });
});

// On mouseover, turn background color of event.target to random (with event delegation)
container.addEventListener("mouseover", event => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;}
);