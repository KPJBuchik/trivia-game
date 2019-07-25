

//ids for checking to see if an answer is correct && to to grab a string with a object array filter????
//everything in one array? 

var triviaQuestions = [

    {
        question: "1+1",
        answers: ["one", "two", "three"],
        answerIndex: 1
    },

    {
        question: "what is the greatest condiment",
        answers: ["mustard", "hot sauce", "ketchup",],
        answerIndex: 0

    },
    {
        question: "2+2",
        answers: ["five", "four", "seven"],
        answerIndex: 1

    },
    {
        question: "what cheese is found in spanokopita",
        answers: ["cheddar", "feta", "parmesan"],
        answerIndex: 1

    },
    {
        question: "Game Over",



    }
];

var unanswered=0
var counter = 5;
//current to display the next
var correct = 0;
var incorrect = 0;
var IntervalId;
var currentIndex = 0;
var answerChoice = []
//var timerRunning=false



$(document).ready(function () {

    $("#start").click(startGame);
    console.log()


    //initializes game 
    function startGame() {
        counter = 5;
        correct = 0;
        incorrect = 0;
        IntervalId;
        currentIndex = 0;
        clearInterval(IntervalId)
        ask()
        $('#start').hide();
    }



    //timer that works 
    function timer() {
        clearInterval(IntervalId);
        IntervalId = setInterval(decrement, 1000)



        function decrement() {
            counter--;
            $('#timer').text(counter)
            if (counter === 0) {
                stop()
                currentIndex++;
                ask()

            }


        }

        function stop() {
            clearInterval(IntervalId);

        }
    }



    //how do i apply new logic to a new question. 
    // what is the proper syntax of indexOf or length here?
    //is the button doing something?
    //Needs a new question on a button click .
    //click returns array length but
    function ask() {
        $("#answers").empty()


        counter = 5;
        if (triviaQuestions[currentIndex]) {
            var questionContent = (triviaQuestions[currentIndex].question)
            $("#questions").text(questionContent)
            var answerContent = Object.values(triviaQuestions[currentIndex].answers)
            $.each(answerContent, function (index, answerContent) {
                $('#answers').append(
                    $('<button class="answer-buttons">' + answerContent + '</button>').attr("data-index", index)
                );

            })

        }
        timer()
        console.log(counter);


    }

    $(document).on("click", ".answer-buttons", function () {
        
        answerContent = ($(this).attr("data-index"))
        console.log(answerContent)

        if (answerContent == triviaQuestions[currentIndex].answerIndex) {
            correct++;
            $("#correct").text(correct)
            currentIndex++;
            ask()
        }
        else if  (triviaQuestions[currentIndex].answerIndex !== answerContent){
        incorrect++;
         $("#incorrect").text(incorrect)
            currentIndex++;
            ask()
        }









    });


    //answerbuttons===index
    //if user choice === correct index number 
    //correct++

    //if user choice!== correct index number
    //incorrect++


    //$(this).index()????

    //get index value of buttons????????
    //  $("#answer-buttons").click(function(){
    //    var answerIndex=$(triviaQuestions.answers).index()
    //    answerChoice+answerIndex})
    //    console.log(answerChoice)








})






//populate the dom with questions 

















/*
    function FirstQuestion() {
        $("#box").append("<h2>FIRSTQUESTION!</h2>");
        console.log("10 seconds left");



    TriviaQuestions.forEach(function (populate) {

        var newQuestions = $("<p>");
        newQuestions.text(populate.question);
        newQuestions.addClass("questions");
        $("#box").append()




})


//reset function


// for loop to generate the questions in ordeR???  method???  TriviaQuestions.forEach(function (populate) {





//logic

///


*/

