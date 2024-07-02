console.log("Javascript is connected");

//variable
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

console.log(theButtons);
console.log(puzzleBoard);

//functions

function changeBGImage(event) {
    console.log("change BGImage called");
    //Method 1
    // console.log(this.id);
    // background-image: url('../images/backGround0.jpg');
    // puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;

    //Method 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
}

function handleStartDrag() {
    console.log(`Started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

//Bug#1: Multiple puzzle pieces can be dropped into a single drop zone.
//An if statement was added to prevent it.
function handleDrop() {
    console.log("Dropped a piece")

    if (this.children.length > 0) {
        return; // If there is already a piece in the drop zone, the action can't be done.
    }
    this.appendChild(draggedPiece);
}

//eventListeners

theButtons.forEach(button =>  button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));