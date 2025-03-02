const boxes = document.querySelectorAll(".box");
const turnDisplay = document.getElementById("turn-display")

let turn = true;

// Check for game winner
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const board =  [null, null, null, null, null, null, null, null, null];

function checkWinner() {
    for ([a, b, c] of winningCombinations) {
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            console.log(`Winner is ${board[a]}!`);
            return;
        }
    }
    return;
}

// Add text to boxes
function addLetter(box) {
    const boxChild = box.firstElementChild;
    const value = boxChild.getAttribute("value")

    if (boxChild.textContent) {
        return;
    }

    if (turn) {
        boxChild.textContent = "x";
        boxChild.className = "x";
        turnDisplay.textContent = "O";
        board[value] = "x"
        turn = false;
        return;
    }

    if (!turn) {
        boxChild.textContent = "o";
        boxChild.className = "o";
        turnDisplay.textContent = "X"
        board[value] = "o";
        turn = true;
        return;
    }
};

// Box event listener
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        addLetter(box);
        checkWinner();
    })
});