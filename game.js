// alert("hello")
var buttonColors = ["red", "blue", "green", "blue"];
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
};
nextSequence();

console.log(gamePattern);