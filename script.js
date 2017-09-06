$(document).ready(function() {
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["Time will tell", "Yes", "No, don't think so", "Maybe", "Doubtful", "For sure!"];
    magic8Ball.askQuestion = function(question) {
            var answer =        this.listOfAnswers[Math.floor(Math.random() * this.listOfAnswers.length)];
        $("#answer").text(question + "\n" + answer);    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        };
    $("#answer").hide();
    var onClick =  function() {
            $("#8ball").effect("shake");
            $("#answer").hide();
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout ( function() {
            var question = prompt("Ask a Yes/No question!");
            magic8Ball.askQuestion(question);
        }, 500);
        $("#answer").fadeIn(4000);
    }
    $("#questionButton").click(onClick);

});