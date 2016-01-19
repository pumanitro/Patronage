(function() {
    'use strict';

    angular
        .module('patronage')
        .controller('ErrorsController', ErrorsController);

    /** @ngInject */
    function ErrorsController() {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
    }
})();
