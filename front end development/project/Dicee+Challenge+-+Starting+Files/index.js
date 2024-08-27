// images regarding player1
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);
// images regarding player2
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// to declaring the winner by if statement
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!"
}
else {
    document.querySelector("h1").innerHTML = "draw";
}

