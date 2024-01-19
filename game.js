var buttonColors = ["red", "blue", "green", "blue"];
var gamePattern = [];
var userClickedPattern = []


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    function buttonSound() {
        if (gamePattern[0] === "green") {
            var green = new Audio("sounds/green.mp3");
            green.play();
        } else if (gamePattern[0] === "blue") {
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
        } else if (gamePattern[0] === "red") {
            var red = new Audio("sounds/red.mp3");
            red.play();
        } else if (gamePattern[0] === "yellow") {
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
        }
    }

    $("#" + gamePattern[0]).fadeOut(100).fadeIn(100);
    buttonSound(); 

   $(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
   })
}

nextSequence();



