(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, $log, webDevTec, toastr, quizService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1443777927383;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    vm.getQuestions = function() {
     return quizService.getQuiz().then(function(data) {

          vm.questions = data;
          //hack
          $scope.questions = data.questions;
          $log.log($scope.questions);
          vm.userName = data.userName;
          return data;
        });     // todo: pass the userID to the service
    }

  }
})();
