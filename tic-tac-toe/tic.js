let isXTurn = true;
let selector;
const state = Array(9).fill(null);
let copyState = new Array(9);

function winnerLogic() {
  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let logic of winner){
    let [a,b,c]=logic;
    if(state[a]!==null &&state[a]===state[b]&&state[a]===state[c])
    {
        return state[a];
    }

  }
  return false;
}
function stateUpdater(index) {
  state[index] = isXTurn ? "X" : "O";
  selector = document.getElementsByClassName("box")[index];
  let heading = document.createElement("h1");
  heading.innerHTML = state[index];
  selector.appendChild(heading);
  isXTurn = !isXTurn;
}

function myfunction(index) {
  stateUpdater(index);
  copyState = [...state];
}

let div=document.createElement("div");
div.innerText=winnerLogic()?"Winner is 