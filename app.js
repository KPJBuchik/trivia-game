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
        question: "Game Over!",
    }
];

var unanswered = 0
var counter = 10;
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
        counter = 5;
        correct = 0;
        incorrect = 0;
        IntervalId;
        currentIndex = 0;
        clearInterval(IntervalId)
        ask()
        $('#start').hide();
    }

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
                incorrect++
            }  
            if (currentIndex>4){
            stop()}
            


        }

        function stop() {
            clearInterval(IntervalId);
        }
    }

    function ask() {
        $("#answers").empty()


        counter = 10;
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
        else if (triviaQuestions[currentIndex].answerIndex !== answerContent) {
            incorrect++;
            $("#incorrect").text(incorrect)
            currentIndex++;
            ask()
        }

        

    });
})