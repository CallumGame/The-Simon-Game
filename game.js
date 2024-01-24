var buttonColors = ["red", "blue", "green", "blue"];
var gamePattern = [];
var userClickedPattern = [];

// Bind the click event outside the function
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

nextSequence();



