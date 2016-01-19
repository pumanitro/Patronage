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
      })
      .state('users', {
              url: '/users',
              templateUrl: 'app/users/users.html',
              controller: 'UsersController',
              controllerAs: 'UsersController'
        })
      .state('about', {
              url: '/about',
              templateUrl: 'app/about/about.html',
              controller: 'AboutController',
              controllerAs: 'AboutController'
        })
      .state('user', {
              url: '/users/:login',
              templateUrl: 'app/users/user/user.html',
              controller: 'UserController',
              controllerAs: 'UserController'
          })
      .state('errors', {
              url: '/errors/404',
              templateUrl: 'app/errors/404.html',
              controller: '404Controller',
              controllerAs: '404Controller'
          });

    $urlRouterProvider.otherwise('/');
  }

})();
