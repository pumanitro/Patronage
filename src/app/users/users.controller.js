(function() {
  'use strict';

  angular
    .module('patronage')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($http) {
    var vm = this;

    vm.replaceUsers = function()
    {
        var pageAdress="https://api.github.com/users?since=";
        pageAdress=pageAdress+vm.userStartId;

        $http.get(pageAdress)
            .then(function(response) {vm.users = response.data;});
    };

    $http.get("https://api.github.com/users")
       .then(function(response) {vm.users = response.data;});

  }
})();
