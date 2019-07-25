

//ids for checking to see if an answer is correct && to to grab a string with a object array filter????
//everything in one array? 

var triviaQuestions = [

    {
        question: "1+1",
        answers: ["one", "two", "three"],
        id: 1, //dont need id 

    },

    {
        question: "what is the greatest condiment",
        answers: ["mustard", "hot sauce", "ketchup",],


    },
    {
        question: "2+2",
        answers: ["five", "four", "seven"],


    },
    {
        question: "what cheese is found in spanokopita",
        answers: ["cheddar", "feta", "parmesan"],


    },
    {
        question: "fifth question",
        answers: ["one answer", "another answer", "another one"],


    }
];


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

    //initializes game 
    function startGame() {
        counter = 10;
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
                incorrect++;
                $("#incorrect").text(incorrect)
                ask()

            }


        }

        function stop() {
            clearInterval(IntervalId);

        }
    }



    //how do i apply new logic to a new question.  what is the proper syntax of indexOf here.  Needs a new question on a button click 
    function ask() {
        
       
        $(".answer-buttons").hide()
        

        counter = 5;
        if (triviaQuestions[currentIndex]) {
            var questionContent = (triviaQuestions[currentIndex].question)
            $("#questions").text(questionContent)
            var answerContent = Object.values(triviaQuestions[currentIndex].answers)
            $.each(answerContent, function (answerIndex, foo) {
                $('#box').append($('<button class="answer-buttons">' + foo + '</button>'));
                $(".answer-buttons").click(function () {
                    
                    ($(answerIndex).index());
                    console.log((answerIndex))
                    if (answerIndex === 1) {
                        correct++;
                        $("#correct").text(correct)}
                    else if  (answerIndex ===2){
                        incorrect++
                        $("#incorrect").text(incorrect)
                    
                       
                 
                    }
                   



                });


            })

        }
        timer()
        console.log(counter);


    }
    

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

