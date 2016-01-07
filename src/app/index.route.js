(function() {
  'use strict';

  angular
    .module('patronage')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $stateProvider
      .state('users', {
              url: '/users',
              templateUrl: 'app/users/main.html',
              controller: 'UsersController',
              controllerAs: 'main'
        });
    $stateProvider
          .state('about', {
              url: '/about',
              templateUrl: 'app/about/main.html',
              controller: 'AboutController',
              controllerAs: 'main'
          });
    $stateProvider
          .state('user', {
              url: '/users/',
              templateUrl: 'app/users/user/main.html',
              controller: 'UserController',
              controllerAs: 'main'
          });

    $urlRouterProvider.otherwise('/');
  }

})();
