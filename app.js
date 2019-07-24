

//ids for checking to see if an answer is correct && to to grab a string with a object array filter????




var triviaQuestions = [

        {
                question: "1+1",
                answers: ["one", "two", "three"],
                id: 1,

        },

        {
                question: "heres a question",
                answers: ["one answer", "another answer"],
                id: 2,

        }]


var counter = 10;

var correct = 0;
var incorrect = 0;
var showQuestion;
var current = 0;
var argh = 0;



$(document).ready(function () {


        $("#start").click(startGame);
        

        function startGame() {
        counter = 10;
        correct = 0;
        incorrect = 0;
        showQuestion;
        current = 0;
        argh = 0;
        clearInterval(showQuestion)
        ask()
                  }
})



function timer() {

        if (counter <= 0) {
                ask()
        }
        counter--;

}





function ask() {
        
        current++;
        counter = 30;
        $('#timer').text(counter)
        if (triviaQuestions[current]) {
                var questionContent = Object.values(triviaQuestions[0].question)
                $("#questions").append(questionContent)

                var answerContent = Object.values(triviaQuestions[0].answers)
                $("#questions").append(answerContent)



        }


        timer()
        console.log(counter);


}






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

