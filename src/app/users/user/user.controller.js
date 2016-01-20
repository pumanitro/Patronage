(function() {
  'use strict';

  angular
    .module('patronage')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, webDevTec, toastr, $http, $state) {
    var vm = this;
    vm.urlParams = $state.params;

    $http.get("https://api.github.com/users/"+vm.urlParams.login)
       .then(function(response) {
            vm.user = response.data;
        },function errorCallback(response) {
            $state.go('errors');
        });
  }
})();
