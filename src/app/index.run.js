(function() {
  'use strict';

  angular
    .module('patronage')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
