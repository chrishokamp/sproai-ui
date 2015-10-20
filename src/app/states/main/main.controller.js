(function() {
    'use strict';

    angular
    .module('spraoiUi')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope, $state, $mdDialog, quizService) {


        function gotQuestions(data){
            console.log("YO2");
            console.log(data);

            $rootScope.quiz = data;
            $state.go('^.questions');   // nm: someone smart could probably send things as params. http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_go
        }

        this.startQuiz = function(ev){
            console.log("YO");
            console.log($scope.username);

            if ($scope.username) {
                quizService.getQuiz($scope.username).then(gotQuestions);
            } else {
                var quitDialog = $mdDialog.alert({
                    title: 'Attention',
                    content: 'Please enter and email address',
                    ok: 'Ok'
                });
                $mdDialog.show(quitDialog);
            }
        };
    }
})();
