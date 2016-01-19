(function() {
    'use strict';

    angular
        .module('patronage')
        .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController() {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';

    }
})();
