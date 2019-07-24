

//ids for checking to see if an answer is correct && to to grab a string with a object array filter????
var triviaQuestions =["1+1","2+2","spicy brown mustard"];
var triviaAnswers1 = ["2","3","5"]
var triviaAnswers2 = ["4","5","6"]



var butt= [
        {question: "1+1",
        answers: ["one","two","three"],
        id:1
        },
        {question:"heres a question",
        answers: ["one answer","another answer"],
        id:2
        }]


 var counter= 10;
 
 var correct=0;
 var incorrect=0;
 var showQuestion;
 var current=0;



 $(document).ready(function(){
 

$("#start").click(startGame);


function timer() {

        if (counter<= 0){
        
        nextQuestion()
        }
counter--;
}




function nextQuestion () {
clearInterval(showQuestion)
        current++;
        counter=30;
        timer()
        ask();
}

function ask(){
if(triviaQuestions[current]){
$("#questions").text(triviaQuestions[0])
        
        setInterval(timer,1000)
}

timer()
console.log(counter);
}

function startGame(){

ask()

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

