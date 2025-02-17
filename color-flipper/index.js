function simpleColor() {
  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  let prev;
  btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
   while(prev===randomNumber)
   {
    randomNumber=getRandomNumber();
   }
    prev=randomNumber;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
}

function getRandomNumber() {
  // const val=Math.floor(Math.random()*8)
  // if(val>=colors.length) return val-colors.length;
  // else return val;
  return Math.floor(Math.random() * 4);
}

simpleColor();
