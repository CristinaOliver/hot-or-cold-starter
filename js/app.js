
$(document).ready(function(){

	newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var userGuessTimes, randomNumber;

  	function rand1to100 () {
  		return Math.floor((Math.random()*100) + 1);
  	};

  	function newGame () {
  		userGuessTimes = 0;
  		randomNumber =  rand1to100 ();
  		$("#count").html(userGuessTimes);
  		$("#feedback").html("Make your Guess!");
  		$("#userGuess").val("");
  	};

  	$(".new").on("click", newGame);

	 $("#guessButton").on("click", function(event){
	 	event.preventDefault();
	 	var number = $("#userGuess").val();
	 	var result = checkNumber(number, randomNumber);
	 	$("#feedback").html(result);
	 	userGuessTimes++;
	 	$("#count").html(userGuessTimes);
	 });



  	function checkNumber (userNumber, randNumber) {
  			difference = Math.abs(userNumber - randNumber);

  			if(userNumber <= 100){
	  			if (difference == 0){
	  				return "Congrats! The number is " + userNumber;
	  			}
	  			else if (difference >= 50) {
	  				return "Ice Cold!";
	  			}
	  			else if (difference <= 50 && difference >= 30) {
	  				return "Cold";
	  			}
	  			else if (difference < 30 && difference >= 20) {
	  				return "Warm";
	  			}
	  			else if (difference < 20 && difference >= 10) {
	  				return "Hot!";
	  			}
	  			else if (difference < 10 && difference >=1) {
	  				return "Hot!";
	  			}
	  		}
	  		else{
	  			return "Type a number between 1 and 100";
	  		}
  			


	};

});


