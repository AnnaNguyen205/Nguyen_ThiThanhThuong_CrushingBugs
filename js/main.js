console.log("Javascript is connected");

//variable
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");

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

//eventListeners

theButtons.forEach(button =>  button.addEventListener("click", changeBGImage));