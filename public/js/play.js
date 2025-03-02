const boxes = document.querySelectorAll(".box");
const turnDisplay = document.getElementById("turn-display")

let turn = true;

function addLetter(box) {
    const boxChild = box.firstElementChild;
    if (boxChild.textContent) {
        return;
    }

    if (turn) {
        boxChild.textContent = "x";
        boxChild.className = "x";
        turnDisplay.textContent = "O"
        turn = false;
        return;
    }

    if (!turn) {
        boxChild.textContent = "o";
        boxChild.className = "o";
        turnDisplay.textContent = "X"
        turn = true;
        return;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {addLetter(box)})
});