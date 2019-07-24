

//ids for checking to see if an answer is correct && to to grab a string with a object array filter????
//everything in one array? 

var triviaQuestions = [

    {
        question: "1+1",
        answers: ["one", "two", "three"],
        id: 1, //dont need id 

    },

    {
        question: "heres a question",
        answers: ["one answer", "another answer"],
        id: 2,

    }
];


var counter = 5;
//current to display the next
var correct = 0;
var incorrect = 0;
var IntervalId;
var currentIndex = 0;


$(document).ready(function () {


    $("#start").click(startGame);
    $("#answer-buttons").click(nextQuestion)

    //initializes game 
    function startGame() {
        counter = 10;
        correct = 0;
        incorrect = 0;
        IntervalId;
        currentIndex = 0;
        clearInterval(IntervalId)
        ask()
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



    //i need a for loop? to index the questions and answers
    //and loop the questions with a setInteval
    function ask() {

        counter = 5;
        if (triviaQuestions[currentIndex]) {
            var questionContent = (triviaQuestions[currentIndex].question)
            $("#questions").append(questionContent)


            var answerContent = Object.values(triviaQuestions[currentIndex].answers)

            $.each(answerContent, function (index, foo) {
                $('#box').append($('<button class="answer-buttons">' + foo + '</button>'));
            })

        }
        timer()
        console.log(counter);


    }
})







//populate the dom with questions 










/*
TriviaQuestions.forEach(function(ask){
        $("#start").click(ask);
        var answer =$("<button>");
        answer.text(ask.answer[1])
        $("#questions").append(triviaQuestion);
        var triviaQuestion = $("<p>")
        answer.text(ask.question[1]);
        answer.addclass("answer-button")
        $("#questions").append(answer);

})
});



//funciton startGame

//function nextQuestion







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

