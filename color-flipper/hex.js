function hexColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btn1 = document.getElementById("btn");
  const color1 = document.querySelector(".color");
  btn1.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color1.textContent = hexColor;
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}
hexColor();
