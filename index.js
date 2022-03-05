var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".mcqItem");
var pickedColor = pickColor();
var rgbLights = document.getElementById("rgbLights");
var optns = document.querySelector(".mcqArea");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var img = document.querySelector("img");
difficultySelect();
function difficultySelect() {
    var difficulty = "easy";
    difficulty = document.getElementById("difficulty").value;
    if (difficulty === "easy") {
        easydifficulty();
    }
    if(difficulty === "hard" ) {
        harddifficulty();
    }
}

function easydifficulty(){
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbLights.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
}

function magic(x) {
    if(x.matches)
        optns.style.gridTemplateRows = "100px 100px 100px 100px 100px 100px";
    else
        optns.style.gridTemplateRows = "200px 200px";
}
function harddifficulty(){

  numSquares = 6;
  colors = generateRandomColors(numSquares);
    pickedColor = pickColor();


    var x = window.matchMedia("(max-width: 700px)");

    magic(x);
    x.addListener(magic);


  rgbLights.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "flex";
  }
}

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbLights.textContent = pickedColor;
  this.textContent = "New Color";
  img.src = "opbkg.png";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "white";
})

rgbLights.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
  //add initial colors to squares
  square[i].style.background = colors[i];
  //add click listeners to squares
  square[i].addEventListener("click", function() {
    //grab color of picked square

    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
       img.src = "crctbkj.png";
        alert("Great Job!");
      resetButton.textContent = "New Game";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
        alert("Keep trying!");
    }
  })
}

function changeColors(color){
for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}