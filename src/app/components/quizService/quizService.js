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
            getQuiz: getQuiz,
            submitQuiz : submitQuiz
        };

        return service;

        // TODO: change name to "setupQuiz"
        function getQuiz(username) {
            // TODO: use $http object
            return $http.get(apiHost + '/questions?userName=' + username)
                .then(getQuestionsComplete)
                .catch(getQuestionsFailed);

            function getQuestionsComplete(response) {
                // TODO: side effect to set username
                //userService.userName = response.data.userName;
                return response.data;
            }

            function getQuestionsFailed(error) {
                $log.error('XHR Failed for getQuiz\n' + angular.toJson(error.data, true));
            }
        }

        function submitQuiz(data){

            return $http.put(apiHost + '/questions', data)
                .then(putSubmissionComplete)
                .catch(putSubmissionFailed);

            function putSubmissionComplete(response) {
                return response.data;
            }

            function putSubmissionFailed(error) {
                $log.error('XHR Failed for getQuiz\n' + angular.toJson(error.data, true));
            }

        }
    }
})();
