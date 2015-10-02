(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .factory('quizService', quizService);

  /** @ngInject */
  function quizService($log, $http) {
    var apiHost = 'http://localhost:7777';

    var service = {
      apiHost: apiHost,
      getQuiz: getQuiz
    };

    return service;

    function getQuiz() {

      return $http.get(apiHost + '/questions')
        .then(getQuestionsComplete)
        .catch(getQuestionsFailed);

      function getQuestionsComplete(response) {
        return response.data;
      }

      function getQuestionsFailed(error) {
        $log.error('XHR Failed for getQuiz\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
