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
        controllerAs: 'main'
      })
      .state('main.quiz', {
        url: '/quiz',
        templateUrl: 'app/states/quiz/quiz.html',
        controller: 'MainController',
        controllerAs: 'main'
    });

    $urlRouterProvider.otherwise('/home');
  }

})();
