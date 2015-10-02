(function() {
  'use strict';

  angular
    .module('spraoiUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
