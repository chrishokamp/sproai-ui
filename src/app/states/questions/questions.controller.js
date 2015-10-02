(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .controller('QuestionsController', QuestionsController);

  /** @ngInject */
  function QuestionsController($timeout, $log, $scope, quizService) {

    $scope.showQs = function() {
      $log.log('scope questions');
      $log.log($scope.questions);

    }

    $scope.getQuestions = function() {
      return quizService.getQuiz().then(function(data) {

        $scope.questions = data.questions;
        //hack
        //$scope.questions = data.questions;
        $log.log($scope.questions);
        //vm.userName = data.userName;
        return data;
      });     // todo: pass the userID to the service
    }

  }
})();
