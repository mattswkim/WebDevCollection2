var randomNumber1;
function randomNumberGen1 () {
    randomNumber1 = Math.floor(Math.random() * 6);
}
var randomNumber2;
function randomNumberGen2 () {
    randomNumber2 = Math.floor(Math.random() * 6);
}
randomNumberGen1();
randomNumberGen2();

var randomDiceImage1 = "images/dice" + (randomNumber1 + 1) + ".png";
var randomDiceImage2 = "images/dice" + (randomNumber2 + 1) + ".png";


var img1 = document.querySelector("img.img1");

function imgSwap1() {
    img1.setAttribute("src", randomDiceImage1);
}
var img2 = document.querySelector("img.img2");

function imgSwap2() {
    img2.setAttribute("src", randomDiceImage2);
}




function comNumber() {
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "⚑ Player 1 Wins";

    } else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins ⚑";
    } else {
        document.querySelector("h1").textContent = "draw";
    }
}

function imgSwap() {
    imgSwap1();
    imgSwap2();
    comNumber();
}
imgSwap();