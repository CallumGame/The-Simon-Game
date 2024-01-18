var buttonColors = ["red", "blue", "green", "blue"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

 
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    

    var audio = new Audio("sounds/" + gamePattern + ".mp3");
    audio.play();
}

nextSequence();


