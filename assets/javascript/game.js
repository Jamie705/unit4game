// alert("something");

// Creating variables to hold the number of wins, losses, guesses left and list of guessed letters.
var wins = 0;
var losses = 0;

//variable for keeping gem total
var gemTotal = 0;

// Randomly math to choose a number from 19-120
var randomNumber= Math.floor((Math.random() * 120) + 19);

//Random number for gems
var imgNumber1 = Math.floor((Math.random() * 12) + 1);
var imgNumber2 = Math.floor((Math.random() * 12) + 1);
var imgNumber3 = Math.floor((Math.random() * 12) + 1);
var imgNumber4 = Math.floor((Math.random() * 12) + 1);

//function to reset game
function reset() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    //Send random number to text
    $('#randomNumber').text(randomNumber);
    console.log("Computer generated random number: " + randomNumber);
    //Random number for gems
    imgNumber1 = Math.floor((Math.random() * 12) + 1);
    imgNumber2 = Math.floor((Math.random() * 12) + 1);
    imgNumber3 = Math.floor((Math.random() * 12) + 1);
    imgNumber4 = Math.floor((Math.random() * 12) + 1);
    //reseting gem total
    gemTotal = 0;
}
    //update score
    function update (params) {
        $('#gemTotal').text("Gem Total: " + gemTotal);
        $('#wins').text("Wins: " + wins);
        $('#losses').text("Losses: " + losses);
        console.log(gemTotal); 
    }
    //function to run else if statments if equal, or over
    function elsify (params) {
            if (gemTotal === randomNumber) {
                console.log("You Win");
                wins++;
                reset()
            }
            else if (gemTotal > randomNumber){
                console.log("You went over the random number. You Lost.");
                losses++;
                reset()
            }
    }
//Send random number to text
    $('#randomNumber').text(randomNumber);
    console.log("Computer generated random number: " + randomNumber);

        // Creating click on events for each image.
        $("#img1").on("click", function () {
            gemTotal += imgNumber1
            update();
            elsify();
            update();
        // alert("You clicked a crystal! " + imgNumber1);
        });
        
        $("#img2").on("click", function () {
            gemTotal += imgNumber2;
            update();
            elsify();
            update();
            // alert("You clicked a crystal! " + imgNumber2);
        });
        
        $("#img3").on("click", function () {
            gemTotal += imgNumber3;
            update();
            elsify();
            update();
            // alert("You clicked a crystal! " + imgNumber3);
        });

        $("#img4").on("click", function () {
            gemTotal += imgNumber4;
            update();
            elsify();
            update();
        // alert("You clicked a crystal!" + imgNumber4);
        });
