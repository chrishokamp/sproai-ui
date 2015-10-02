(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .controller('QuestionController', QuestionController);

  /** @ngInject */
  function QuestionController($timeout, webDevTec, toastr) {

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

  }
})();
