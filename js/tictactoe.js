let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");

let turnO = true;

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
box.addEventListener("click", () => {
    if(turnO){
        box.innerText = "X";
        turnO = false;
    } else{
        box.innerText = "O";
        turnO = true;
    }
    box.disabled = true;
    if(checkWinner()){
        return;
    }
})
})


const showWinner = (winner) =>{
    msgContainer.classList.remove("hide");
    msg.innerText = `${winner} is the winner`;
    box.disabled = true;
}

const checkWinner = () =>{
    for (let condition of winConditions){
        let val1 = boxes[condition[0]].innerText;
        let val2 = boxes[condition[1]].innerText;
        let val3 = boxes[condition[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 == val2 && val2 == val3 ){
            showWinner(val1);
            return true;
        }
    }
}
}



const newGame = () =>{
    turnO = true;
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    })
}

resetBtn.addEventListener("click", newGame);
newGameBtn.addEventListener("click", newGame);