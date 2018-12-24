//Who played dinklebot?
//Who plays Cayde-6?
//Who played The Speaker?
//Who plays Ikora?
//Who plays Shaxx?
//Who plays your Ghost?
//Who plays Zavala
// Answers -Peter Dinklage(former ghost) -Nathan Fillion(Cayde-6) -Bill Nighy(The Sppeaker)
//-Gina Torres(Ikora) -Lennie James(Shaxx) -Nolan North(current ghost) -Lance Reddick(Zavala)
// $(document).ready(function(){
// })

// var questions = ["Who played Dinklebot?","Who played Cayde-6?",
// "Who played The Speaker?","Who plays Ikora?","Who plays Lord Shaxx?",
// "Who plays your current Ghost?","Who plays Zavala?"];

// var actors = ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James",
// "Nolan North","Lance Reddick"];

// var correct = 0;
// var incorrect = 0;


     var revealTrivia;

     var trivia = {
          correct: 0,
          incorrect: 0,
          unasnwered: 0,
          counter: 40,

     };

     var questions = [{
          question : "Who played Dinklebot?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "0"
     },
     {
          question : "Who played Cayde-6?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "1"
     },
     {
          question : "Who played The Speaker?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "2"
     },
     {
          question : "Who plays Ikora?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "3"
     },
     {
          question : "Who plays Lord Shaxx?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "4"
     },
     {
          question : "Who plays your current Ghost?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "5"
     },
     {
          question : "Who plays Zavala?",
          choices : [
               "Peter Dinklage",
               "Nathan Fillion",
               "Bill Nighy",
               "Gina Torres",
               "Lennie James",
               "Nolan North",
               "Lance Reddick"
          ],
          answer : "6"
     }
];

$(document).ready(function(){
     $("#start").click(function(){
        startTrivia();  
     });
});

$(document).on("click","#answers",triviaCheck)

function triviaCheck() {
     var radioSet = $(this).attr("value");
     var userChoice = $("input:checked").val()



     if(userChoice === questions[radioSet].answer){
          trivia.correct++;
     }
     else {
          trivia.incorrect++;
     }

}

function startTrivia(){
     countdown();
     startCountdown();

     $("#triviaGame").html("<h3>Haha! The Crucible is no place for mercy.</h3>")
     for(i=0; i<questions.length; i++){
          $("#triviaGame").append('<div id="questions'+i+'"></div><br>');
          $("#questions" + i).append(questions[i].question);

          for(j=0; j<7; j++) {
               $('<br><input id="answers" type="radio" name="' + i + '" value="' + j + '">' + questions[i].choices[j] + '</input>').appendTo("#questions" + i);
          }

     }

     var stopButton = $("<button type='button' class='btn btn-warning'>Done</button>");
     $(stopButton).attr("id","stopButton")
     $("#triviaGame").append(stopButton);
       

}



function startCountdown(){
     revealTrivia = setInterval(countdown, 1000);
}

function stopCountdown (){
     clearInterval(revealTrivia)
}

$("body").css("background-image", 'url(assets/images/mainbackgroundimage.jpg)');

function countdown(){
     trivia.counter--;
     $("#timer").html("<h2>You only have "+trivia.counter+" seconds</h2>");
     if(trivia.counter === 0){
          stopCountdown();
          $("body").css("background-image", 'url(assets/images/timedoutimage.jpg)');
          $("#timer").html("<h2></h2>");
          $("#mainBanner").html("<h1>You think you're good enough?<h1>")
          $("#triviaGame").html("<h1 class='wonLost'>Matches Won: " +trivia.correct+"</h1>");
          $("#triviaGame").append("<h1 class='wonLost'>Matches Lost: "+trivia.incorrect+"</h1>");
     }
}

$(document).on("click","#stopButton", forceStop);

function forceStop(){
     stopCountdown();$("body").css("background-image", 'url(assets/images/donebuttonimage.jpg)');
     $("#timer").html("<h2></h2>");
     $("#mainBanner").html("<h1>Hey. You look like you need training, Guardian<h1>")
     $("#triviaGame").html("<h1 class='wonLost'>Matches Won: " +trivia.correct+"</h1>");
     $("#triviaGame").append("<h1 class='wonLost'>Matches Lost: "+trivia.incorrect+"</h1>");
}


// var score = {
//  correct: 0,
//  incorrect: 0,
//  unasnwered: 0,
// };

// var questions = {
//  firstQ : "Who played Dinklebot?",
//  secondQ : "Who played Cayde-6?",
//  thirdQ : "Who played The Speaker?",
//  fourthQ : "Who plays Ikora?",
//  fifthQ : "Who plays Lord Shaxx?",
//  sixthQ : "Who plays your current Ghost?",
//  seventhQ : "Who plays Zavala?",
// };

// var choices = { 
//  choices1 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices2 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices3 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices4 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices5 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices6 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
//  choices7 : ["Peter Dinklage","Nathan Fillion","Bill Nighy","Gina Torres","Lennie James","Nolan North","Lance Reddick"],
// }
// var answers = {
//  firstA : "Peter Dinklage",
//  secondA : "Nathan Fillion",
//  thirdA : "Bill Nighy",
//  fourthA : "Gina Torres",
//  fifthA : "Lennie James",
//  sixthA : "Nolan North",
//  seventhA : "Lance Reddick",
// };

// // var intervalId;

// // var timerRunning =false;
// // var count = 40
// // var timerCounter = setInterval(timer, 1000);

// // function timer() {
// //      count = count -1;
// //      if(count <= 0){
// //           clearInterval(counter);return;
// //      }
// //      $("#timer").text(count + " Seconds left!");
// // }

// $("#startbutton").on("click", timer);
// function timer(){
//      var count = 40;
//      setInterval(function(){
//           count--;
//           if(count >=0){
//                $("#timer").text(count + " Seconds left!")
//           }
//           if(count === 0) {
//                $("#timer").text("You ran out of time!");
//                clearInterval(count)
//           }
//      }, 1000);
// }






// var question1 = questions.firstQ;
// $("#question1").append(question1);
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[0] + "'/>Peter Dinklage");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[1] + "'/>Nathan Fillion");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[2] + "'/>Bill Nighy");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[3] + "'/>Gina Tores");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[4] + "'/>Lennie James");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[5] + "'/>Nolan North");
//      $("#answer1").append("<input type='radio' class = buttons value='" + choices.choices1[6] + "'/>Lance Reddick");

// var question2 = questions.secondQ;
// $("#question2").append(question2);
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[0] + "'/>Peter Dinklage");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[1] + "'/>Nathan Fillion");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[2] + "'/>Bill Nighy");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[3] + "'/>Gina Tores");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[4] + "'/>Lennie James");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[5] + "'/>Nolan North");
//      $("#answer2").append("<input type='radio' class = buttons value='" + choices.choices2[6] + "'/>Lance Reddick");

// var question3 = questions.thirdQ;
// $("#question3").append(question3);
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[0] + "'/>Peter Dinklage");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[1] + "'/>Nathan Fillion");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[2] + "'/>Bill Nighy");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[3] + "'/>Gina Tores");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[4] + "'/>Lennie James");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[5] + "'/>Nolan North");
//      $("#answer3").append("<input type='radio' class = buttons value='" + choices.choices3[6] + "'/>Lance Reddick");

// var question4 = questions.fourthQ;
// $("#question4").append(question4);
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[0] + "'/>Peter Dinklage");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[1] + "'/>Nathan Fillion");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[2] + "'/>Bill Nighy");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[3] + "'/>Gina Tores");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[4] + "'/>Lennie James");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[5] + "'/>Nolan North");
//      $("#answer4").append("<input type='radio' class = buttons value='" + choices.choices4[6] + "'/>Lance Reddick");

// var question5 = questions.fifthQ;
// $("#question5").append(question5);
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[0] + "'/>Peter Dinklage");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[1] + "'/>Nathan Fillion");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[2] + "'/>Bill Nighy");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[3] + "'/>Gina Tores");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[4] + "'/>Lennie James");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[5] + "'/>Nolan North");
//      $("#answer5").append("<input type='radio' class = buttons value='" + choices.choices5[6] + "'/>Lance Reddick");


// var question6 = questions.sixthQ;
// $("#question6").append(question6);
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[0] + "'/>Peter Dinklage");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[1] + "'/>Nathan Fillion");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[2] + "'/>Bill Nighy");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[3] + "'/>Gina Tores");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[4] + "'/>Lennie James");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[5] + "'/>Nolan North");
//      $("#answer6").append("<input type='radio' class = buttons value='" + choices.choices6[6] + "'/>Lance Reddick");


// var question7 = questions.seventhQ;
// $("#question7").append(question7);
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[0] + "'/>Peter Dinklage");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[1] + "'/>Nathan Fillion");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[2] + "'/>Bill Nighy");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[3] + "'/>Gina Tores");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[4] + "'/>Lennie James");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[5] + "'/>Nolan North");
//      $("#answer7").append("<input type='radio' class = buttons value='" + choices.choices7[6] + "'/>Lance Reddick");



// $("<button>").attr("<#(answerButtons");
// $("#answerButtons").html(answers)
// $("#answerButtons").append("#questions")

