
var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var gameStarted = false;



function playSound(name) {
  var audio = new Audio("/Angela Yu/jQuery/Simon Game Challenge Starting Files/sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  //2. animate a flash to the button selected in step 1.
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(250).fadeIn(250);
  //3. Use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour)
  
  $("#level-title").text("Level " + level);
  level++;

  userClickedPattern = [];
}


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")
  setTimeout(() => {$("#"+currentColour).removeClass("pressed")
  }, 100);
}

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress($(this).attr("id"));
  checkAnswer(userClickedPattern.length-1)
})

$("body").keypress(function(){
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
    $("#level-title").text("Level 0");
  }
  
})

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success")
    if (userClickedPattern.length === gamePattern.length) {
      
      console.log(userClickedPattern);
      console.log(gamePattern);

      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
    
  } else {
    console.log("wrong")
    playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(() => {
      $("body").removeClass("game-over")
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart")
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}