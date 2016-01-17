(function() {
  'use strict';

  angular
    .module('patronage')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($timeout, webDevTec, toastr, $http) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1451751192631;
    vm.showToastr = showToastr;

    vm.replaceUsers = function()
    {
        var pageAdress="https://api.github.com/users?since=";
        pageAdress=pageAdress+angular.element("#userStartId").val();

        $http.get(pageAdress)
            .then(function(response) {vm.users = response.data;});
    };

    $http.get("https://api.github.com/users")
       .then(function(response) {vm.users = response.data;});


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
