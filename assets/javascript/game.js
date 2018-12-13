//Pseudo

//There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score totalScore.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
//The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


//Variables 
var wins, losses, crysRed, crysBlue, crysYellow, crysGreen, randomNumber, totalScore;

wins = 0;
losses = 0;
crysRed = Math.floor(Math.random() * 10) + 1;
crysBlue = Math.floor(Math.random() * 10) + 1;
crysYellow = Math.floor(Math.random() * 10) + 1;
crysGreen = Math.floor(Math.random() * 10) + 1;
randomNumber = Math.floor(Math.random() * 100) + 26; 
totalScore = 0;


$("#randomNumber").text(randomNumber);
$("#losses").text(losses);
$("#wins").text(wins);
$("#losses").html(losses);
$("#wins").html(wins);
$("#totalScore").text(totalScore);

 
//Functions
function reset(){
    crysRed = Math.floor(Math.random() * 10) + 1;
    crysBlue = Math.floor(Math.random() * 10) + 1;
    crysYellow = Math.floor(Math.random() * 10) + 1;
    crysGreen = Math.floor(Math.random() * 10) + 1;
    randomNumber = Math.floor(Math.random() * 100) + 26;
    $("#randomNumber").text(randomNumber);
    totalScore = 0;
    $("#totalScore").text(totalScore);
}

function win() {
	alert("You win!");
	wins ++;
	$("#wins").text(wins);
	reset();
}

function lost() {
	alert("You lose!");
	losses ++;
	$("#losses").text(losses);
	reset();
}

function evaluate(){
    if (totalScore === randomNumber){
        win()
    }
    else (totalScore > randomNumber);{
        lost()
    }
}


$("#crysRed").click (function(){
    console.log(totalScore);
    totalScore = totalScore + crysRed; 
    console.log(totalScore);
    $("#totalScore").text(totalScore);

    evaluate(); 
  });  

 $("#crysBlue").click (function(){
    totalScore = totalScore + crysBlue;
    $("#totalScore").text(totalScore);

    evaluate();   
  });  

 $("#crysYellow").click (function(){
    totalScore = totalScore + crysYellow;
    $("#totalScore").text(totalScore);  

    evaluate();   
  });  

 $("#crysGreen").click (function(){
    totalScore = totalScore + crysGreen;
    $("#totalScore").text(totalScore);
    
    evaluate();   
  });  