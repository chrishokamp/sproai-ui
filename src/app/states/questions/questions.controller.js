(function() {
    'use strict';

    angular
    .module('spraoiUi')
    .controller('QuestionsController', QuestionsController);

    /** @ngInject */
    function QuestionsController($rootScope, $scope, $state, $mdDialog, quizService) {

        if (!$rootScope.quiz){
            $state.go('^.home');
        }

        /**
         * Private Members and methods
         */

        var skipConfirm = $mdDialog.confirm()
            .title('Skip Question?')
            .content('Would you like to skip this question')
            .ariaLabel('Skip Question')
            .ok('Skip')
            .cancel('No, Answer');

        // nm: should I consider if .questions is null? - meh for now
        var questions = $rootScope.quiz.questions;
        var questionPointer = 0;
        var answerChosen = false;
        var answers = [];

        var changeQuestion = function() {
            console.log("[qCtrl.changeQuestion] CALLED");

            if (questionPointer == questions.length -1 ){
                $scope.quizComplete = true;
                return;
            }

            questionPointer++;
            $scope.currentQuestion = questions[questionPointer];
            $scope.questionNumber = questionPointer + 1;
            answerChosen = false;
        }

        /**
         * "Public" Members and methods
         */

        console.log("[qCtrl               ] currentQuestion: " + questions[questionPointer].question_id);
        $scope.currentQuestion = questions[questionPointer];
        $scope.questionNumber = questionPointer + 1;
        $scope.quizComplete = false;

        this.selectQuestion = function(ev, index) {
            console.log("[qCtrl.selectQuestion ] CALLED");
            if(!answerChosen){
                answerChosen = true;
                console.log(ev);
                console.log(index);
                console.log(questions[questionPointer].answers[index]);

                answers.push(
                    {
                        question_id: questions[questionPointer].question_id,
                        answer: index + 1
                    }
                );

                if (index + 1 == questions[questionPointer].correct_answer){
                    ev.target.className += " correct";
                } else {
                    ev.target.className += " incorrect";
                    var correct = document.getElementById("answer-" + (questions[questionPointer].correct_answer - 1));
                    correct.className += " correct";

                }
            }
        };

        this.nextQuestion = function(ev) {
            console.log("[qCtrl.nextQuestion   ] CALLED");
            // Has the user selected an answer
            if(!answerChosen){
                $mdDialog.show(skipConfirm).then(changeQuestion);
            } else if (questionPointer <= questions.length) {
                changeQuestion();
            }
        };

        /**
         * Stub
         */
        this.submitAnswers = function(ev) {
            console.log("[qCtrl.submitAnswers  ] CALLED");
            console.log(answers);
        };
    }
})();
