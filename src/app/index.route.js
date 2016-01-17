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
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'HomeController'
      });

    $stateProvider
      .state('users', {
              url: '/users',
              templateUrl: 'app/users/users.html',
              controller: 'UsersController',
              controllerAs: 'UsersController'
        });
    $stateProvider
          .state('about', {
              url: '/about',
              templateUrl: 'app/about/about.html',
              controller: 'AboutController',
              controllerAs: 'AboutController'
          });
    $stateProvider
          .state('user', {
              url: '/users/:login',
              templateUrl: 'app/users/user/user.html',
              controller: 'UserController',
              controllerAs: 'UserController'
          });

    $urlRouterProvider.otherwise('/');
  }

})();
