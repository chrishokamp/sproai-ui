(function() {
    'use strict';

    angular
    .module('spraoiUi')
    .controller('QuestionsController', QuestionsController);

    /** @ngInject */
    function QuestionsController($rootScope, $scope, $window, $state, $mdDialog, quizService) {

        if (typeof $rootScope.quiz === 'undefined'){
            $state.go('^.home');
        }
        $scope.progressValue = 0.5;

        // Prevent refreshing during the quiz
        angular.element($window).on('beforeunload', function (event) {
            event.preventDefault();
        });

        /**
        * Private Members and methods
        */
        if (!Date.now) { /*Polyfill nm: this might not be super angular dunno.*/
            Date.now = function now() {
                return new Date().getTime();
            };
        }

        var startTime = Date.now();

        // var skipConfirm = $mdDialog.confirm()
        //     .title('Skip Question?')
        //     .content('Would you like to skip this question')
        //     .ariaLabel('Skip Question')
        //     .ok('Skip')
        //     .cancel('No, Answer');

        var selectAlert = $mdDialog.alert()
            .title('Please select an answer')
            .content('You must first select and answer before continuing.')
            .ariaLabel('select an answer')
            .ok('ok');


        // nm: should I consider if .questions is null? - meh for now
        var questions = $rootScope.quiz.questions;
        var numberQuestions = questions.length;
        var questionPointer = 0; /* Index into array of what question to display*/
        var answerChosen = false;
        var answers = [];

        var changeQuestion = function() {
            console.log("[qCtrl.changeQuestion] CALLED");

            if (questionPointer === questions.length -1 ){
                $scope.quizComplete = true;
                $scope.progressValue = 100;
                angular.element($window).off('beforeunload'); // allow users to refersh the page now? maybe this should be after submit.
                return;
            }

            questionPointer++;
            $scope.currentQuestion = questions[questionPointer];
            $scope.questionNumber = questionPointer + 1;
            $scope.progressValue = questionPointer / numberQuestions * 100;
            console.log($scope.progressValue);
            answerChosen = false;

            if(questionPointer == 20){ //Minimum number of questions to answer before showing the submit button
                $scope.showSubmit = true;
            }
        };

        var changeState = function(){
            console.log("[qCtrl.changeState   ] CALLED");
            $state.go('^.thanks')

        }

        /**
        * "Public" Members and methods
        */

        console.log("[qCtrl               ] currentQuestion: " + questions[questionPointer].question_id);
        $scope.currentQuestion = questions[questionPointer];
        $scope.questionNumber = questionPointer + 1; /* Question number being displayed (couting from 1)*/
        $scope.questionsAnswered = 0; /* Becaused there is time between answering and mocing on the the next question.*/
        $scope.correctCount = 0;
        $scope.showSubmit = false;
        $scope.quizComplete = false;

        this.selectAnswer = function(ev, index) {
            console.log("[qCtrl.selectQuestion] CALLED");
            if(!answerChosen){  // can only answer a question once.
                answerChosen = true;

                // if (questionPointer == 0){
                //     startTime = Date.now();
                // }

                answers.push(
                    {
                        question_id: questions[questionPointer].question_id,
                        choosen_answer: index + 1,
                        correct_answer: questions[questionPointer].correct_answer
                    }
                );

                $scope.questionsAnswered++;
                if (index + 1 === questions[questionPointer].correct_answer){
                    ev.target.className += " correct";
                    $scope.correctCount++;
                } else {
                    ev.target.className += " incorrect";
                    var correct = document.getElementById("answer-" + (questions[questionPointer].correct_answer - 1));
                    correct.className += " correct";
                }
            }
        };

        this.nextQuestion = function(ev) {
            console.log("[qCtrl.nextQuestion  ] CALLED");
            // Has the user selected an answer
            if(!answerChosen){
                $mdDialog.show(selectAlert);
            } else if (questionPointer <= questions.length) {
                changeQuestion();
            }
        };

        /**
        * Stub
        */
        this.submitAnswers = function(ev) {
            console.log("[qCtrl.submitAnswers  ] CALLED");

            var timeTaken = Date.now() - startTime;

            quizService.submitQuiz({
                "userName": $rootScope.quiz.userName,
                "startTime": startTime,
                "timeTaken": timeTaken,
                "answers": answers
            }).then(changeState);
        };
    }
})();
