$(document).ready(function () {
    var buttonColors = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var level = 0;

    $(".btn").click(function () {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    });

    function nextSequence() {
        level++;
        $("#level-title").text("Level " + level);

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

    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            console.log("Success!");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence();
                    userClickedPattern = [];
                }, 1000);
            }
        } else {
            console.log("Wrong!");
            var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        }
    }



    $(document).keypress(function () {
        nextSequence();
    });
});
