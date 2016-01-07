(function() {
  'use strict';

  angular
    .module('patronage')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, webDevTec, toastr, $http, $state) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1451751192631;
    vm.showToastr = showToastr;
    vm.urlParams = $state.params;

    $http.get("https://api.github.com/users/"+vm.urlParams.login)
       .then(function(response) {vm.user = response.data;});


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



  }
})();
