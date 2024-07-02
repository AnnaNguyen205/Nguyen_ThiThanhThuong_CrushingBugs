console.log("Javascript is connected");

//variable
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone")
    resetButton = document.querySelector('#resetBut');
    // Bug#2: resetButton was created
let draggedPiece;

console.log(theButtons);
console.log(puzzleBoard);

function changeBGImage(event) {
    console.log("Change BGImage called");
    //Method 1
    // console.log(this.id);
    // background-image: url('../images/backGround0.jpg');
    // puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;

    //Method 2
    console.log("Changing background image to", event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
    
    //Bug#2: Change the puzzle pieces following the background image
    const puzzleId = event.currentTarget.id;
    const pieceNames = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    
    puzzlePieces.forEach((piece, index) => {
        piece.src = `./images/${pieceNames[index]}${puzzleId}.jpg`;
    });

    resetPieces(); //Bug#2: resetPieces function was placed here to make previous pieces disappear when changing the background.
}

//this function is for bug#2
function resetPieces() {
    console.log("Resetting pieces to their original positions");
    puzzlePieces.forEach(piece => document.querySelector('.puzzle-pieces').appendChild(piece));
}

function handleStartDrag() {
    console.log(`Started dragging piece: `, this);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged over a drop zone");
}

//Bug#1: Multiple puzzle pieces can be dropped into a single drop zone.
//An if statement was added to prevent it.
function handleDrop() {
    if (this.children.length > 0) {
        console.log("Drop zone already contains a piece. Drop action prevented.");
        return; // If there is already a piece in the drop zone, the action can't be done.
    }

    this.appendChild(draggedPiece);
    console.log(`Dropped piece into drop zone`);
}

//eventListeners

theButtons.forEach(button =>  button.addEventListener("click", changeBGImage));

resetButton.addEventListener('click', resetPieces); //Bug#2: this was added to make previous pieces disappear when resetting.

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));