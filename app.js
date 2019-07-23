$(document).ready(function(){
var TriviaQuestions = [
        {question: "1+1",
        answers: ["one","two","three"],
        correct:1,
        },
        {question:"heres a question",
        answers: ["one answer","another answer"],
        correct:0,
        }]







setTimeout(FirstQuestion, 1000)
function FirstQuestion() {

        $("#box").text("ahoy");
        console.log(TriviaQuestions[1])
}
})



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

