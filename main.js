const rock = document.querySelector(".selR");
const paper = document.querySelector(".selP");
const scissors = document.querySelector(".selS");

const resPlayer = document.querySelector("#resPlayer");
const resMachine = document.querySelector("#resMachine");

const pScore = document.querySelector(".pScore");
const mScore = document.querySelector(".mScore");

var pCheck = 0;
var mCheck = 0;
var pWin = 0;
var mWin = 0;

const name = prompt("What's your name?");
const pName = document.querySelector(".pName");

if (name == null || name == "" || name == " ") {
  pName.innerHTML = "Player";
} else {
  pName.innerHTML = name;
}

rock.onclick = function() {
  pCheck = 1;
  resPlayer.src=`images/rockP.png`;
  machine();
  win();
}
paper.onclick = function() {
  pCheck = 2;
  resPlayer.src=`images/paperP.png`;
  machine();
  win();
}
scissors.onclick = function() {
  pCheck = 3;
  resPlayer.src=`images/scissorsP.png`;
  machine();
  win();
}


function machine() {
  mCheck = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  resMachine.src=`images/mac${mCheck}.png`;
}

function win() {
  switch (pCheck) {
    case 1:
      if (mCheck == 2) mWin++; else if (mCheck == 3) pWin++;
      break;
    case 2:
      if (mCheck == 3) mWin++; else if (mCheck == 1) pWin++;
      break;
    case 3:
      if (mCheck == 1) mWin++; else if (mCheck == 2) pWin++;
      break;
  }
  pScore.innerHTML = "<h4>"+ pWin +"</h4>";
  mScore.innerHTML = "<h4>"+ mWin +"</h4>";
}