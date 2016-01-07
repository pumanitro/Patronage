(function() {
    'use strict';

    angular
        .module('patronage')
        .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController($scope) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';

    }
})();
