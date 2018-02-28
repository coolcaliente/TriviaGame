$(document).ready(function () {

    $("#startButton").on("click", function () {
        $("#timerArea").html("<h2> Time Remaining: " + timerCounter + "</h2>");
        questionGenerator();


        $("#submitButton").on("click", function () {
            checkAnswer();
        });

        setTimeout(updateTimer, 1000);

    });





    //variables 

    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
    var timerCounter = 10;
    var graded = false;

    var trivia = [{
        question: "The scientific name for banana is musa sapientum, which means:",
        choices: ["Muse of Patience", "Yellow Snake", "Fruit Of The Wise Men"],
        correctAnswer: "Fruit Of The Wise Men"

    }, {

        question: "The average American eats how many pounds of bananas each year?",
        choices: ["5", "27", "12"],
        correctAnswer: "27"

    }, {

        question: "Humans share what percentage of DNA with bananas?",
        choices: ["60%", "3%", "38%"],
        correctAnswer: "60%"

    }, {

        question: "Which country banned seductive eating of bananas on live stream?",
        choices: ["India", "Korea", "China"],
        correctAnswer: "China"

    }, {

        question: "Bananas are technically considered a:",
        choices: ["fruit", "herb", "berry"],
        correctAnswer: "berry"

    }];


    // functions

    function questionGenerator() {
        $("#startButton").remove();
        for (var i = 0; i < trivia.length; i += 1) {
            $("#triviaArea").append("<h3>" + trivia[i].question + "</h3>");
            for (var j = 0; j < trivia[i].choices.length; j += 1) {
                $("#triviaArea").append('<input type="radio" name ="question' + i + '"value="' + trivia[i].choices[j] + '">' + trivia[i].choices[j]);
            }
        }

        // function submitClicked() {
        //     alert("you presssed the button");
        // }
        $("#triviaArea").append("<div><button type='button' class='btn btn-primary' id='submitButton'>Check Answers</button></div>");

    }

    function updateTimer() {
        if (graded === true) {
            return;
        }
        timerCounter -= 1;
        $("#timerArea").html("<h2> Time Remaining: " + timerCounter + "</h2>");
        if (timerCounter > 0) {
            setTimeout(updateTimer, 1000);
        } else {
            checkAnswer();

        }
    }

    function checkAnswer() {
        if (graded === true) {
            return;
        }
        for (var i = 0; i < trivia.length; i += 1) {
            var userChoice = $('input[name=question' + [i] + ']:checked').val();
            if (userChoice === trivia[i].correctAnswer) {
                correctCounter++;
            } else if (userChoice == null) {
                unansweredCounter++;
            } else {
                incorrectCounter++;
            }
        }
        graded = true;
        $("#timerArea").remove();
        $("#triviaArea").html("<h3>You got " + correctCounter + " correct</h3>");
        $("#triviaArea").append("<h3>You got " + incorrectCounter + " incorrect</h3>");
        $("#triviaArea").append("<h3>You left " + unansweredCounter + " unanswered</h3>");
    }

});

// user presses start button

// timer starts

// form populates

// user selects answers

// presses submit button

// form goes away and correct and incorrect counters replace form area
