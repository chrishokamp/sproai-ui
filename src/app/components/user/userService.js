(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .factory('userService', userService);

  /** @ngInject */
  function userService() {

    var service = {
      userName:  ''
    };

    return service;

  }
})();
