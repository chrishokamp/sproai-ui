(function() {
    'use strict';

    angular
    .module('spraoiUi')
    .controller('QuestionsController', QuestionsController);

    /** @ngInject */
    function QuestionsController($rootScope, $scope, $state, $stateParams, quizService) {

        if (!$rootScope.quiz){
            $state.go('^.home');
        }
        // nm: should I consider if .questions is null? - meh for now
        var questions = $rootScope.quiz.questions;
        var questionPointer = 0;

        if(questionPointer + 1  < questions.length){
            $scope.showNext = true;
        }


        console.log("[       qCtrl      ] currentQuestion: " + questions[questionPointer].question_id);

        $scope.currentQuestion = questions[questionPointer];

        this.nextQuestion = function(ev) {
            console.log("[qCtrl.nextQuestion] CALLED");

            // Has the user selected an answer
            if(true){
                console.log("YO3");
            }

            // Is the user at the end of the questions
            if(questionPointer + 1  < questions.length){
                questionPointer++;
                console.log("[qCtrl.nextQuestion] currentQuestion: " + questions[questionPointer].question_id);
                $scope.currentQuestion = questions[questionPointer];
            } else {
                $scope.showNext = false;
            }
        }

        // $scope.getQuestions = function() {
        //   return quizService.getQuiz().then(function(data) {
        //
        //     $scope.questions = data.questions;
        //     //hack
        //     //$scope.questions = data.questions;
        //     $log.log($scope.questions);
        //     //vm.userName = data.userName;
        //     return data;
        //   });     // todo: pass the userID to the service
        // };

    }
})();
