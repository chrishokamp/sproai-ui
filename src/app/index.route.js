(function() {
    'use strict';

    angular
    .module('spraoiUi')
    .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('main', {
            templateUrl: 'app/states/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'app/states/home/home.html',
            controller: 'MainController',
            controllerAs: 'main',
            parent: 'main'
        })
        .state('main.questions', {
            url: '/questions',
            templateUrl: 'app/states/questions/questions.html',
            controller: 'QuestionsController',
            controllerAs: 'qCtrl',
            parent: 'main'
        })
        .state('main.thanks', {
            url: '/thanks',
            templateUrl: 'app/states/thanks/thanks.html',
            controller: 'MainController',
            controllerAs: 'main',
            parent: 'main'
        });

        $urlRouterProvider.otherwise('/home');
    }
})();
