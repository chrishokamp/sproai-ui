(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .controller('QuestionController', QuestionController);

  /** @ngInject */
  function QuestionController($timeout, $mdDialog, webDevTec, toastr) {

    this.questions = [
        {
            question_str: "What's up?",
            question_id: 1
        },
        {
            question_str: "How are things?",
            question_id: 2
        }
    ];

    this.showQuitDialog = function(ev){
        var quitDialog = $mdDialog.confirm()
          .title('Are you sure you want to quit?')
          .content('Participants must complete between 20 and 100 questions or all game progress will be lost')
          .ariaLabel('Quit Early')
          .targetEvent(ev)
          .ok('Quit')
          .cancel('Continue');

        $mdDialog.show(quitDialog).then(function() {
            // User ends quiz
        }, function() {
            // User continues with the quiz
        });
    };

  }
})();
