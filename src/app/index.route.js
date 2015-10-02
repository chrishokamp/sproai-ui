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
      })
      .state('main.question', {
        url: '/question',
        templateUrl: 'app/states/question_card/question.html',
        controller: 'QuestionController',
        controllerAs: 'qCtrl'
      })
      .state('main.questionNav', {
        url: '/questionNav',
        templateUrl: 'app/states/question_card/question.navigator.html',
        controller: 'QuestionControllerNav',
        controllerAs: 'qCtrlNav'
      });
;

    $urlRouterProvider.otherwise('/home');
  }

})();
