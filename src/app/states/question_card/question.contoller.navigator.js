/**
 * Created by xf on 10/2/15.
 */
(function() {
    'use strict';

    angular
        .module('spraoiUi')
        .controller('QuestionControllerNav', QuestionControllerNav);

    /** @ngInject */
    function QuestionControllerNav($timeout, webDevTec, toastr) {
        var self = this;


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


        self.currentQuestionId = 1;
        self.MaxQuestionID = 4;
        self.progressBarValue = self.currentQuestionId / self.MaxQuestionID * 100;

        self.gotoNextQuestion = function(){
            if(self.currentQuestionId < self.MaxQuestionID){
                self.currentQuestionId += 1;
                self.progressBarValue = self.currentQuestionId / self.MaxQuestionID * 100;
            }
        }
    }
})();