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

        // TODO: change name to "setupQuiz"
        function getQuiz(username) {

            console.log("username: " + username);
            //console.log($scope.userName);
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
    }
})();
