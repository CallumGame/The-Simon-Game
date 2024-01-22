var buttonColors = ["red", "blue", "green", "blue"];
var gamePattern = [];
var userClickedPattern = []


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    var audio = new Audio("sounds/" + gamePattern + ".mp3");
    audio.play();
    

    $("#" + gamePattern[0]).fadeOut(100).fadeIn(100);

   $(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
   })

   function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
   }

   function animatePress(currentColor){
    
   }

}



nextSequence();



