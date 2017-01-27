angular.module('airnwater-app', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  	function($stateProvider, $urlRouterProvider, $locationProvider) {
      //$locationProvider.html5Mode(true).hashPrefix('!');
      $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './src/home/home.html',
        controller: 'homeCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: './src/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('devices', {
        url: '/devices',
        templateUrl: './src/devices/devices.html',
        controller: 'deviceCtrl'
      })
      .state('pollution-board', {
        url: '/pollution-board',
        templateUrl: './src/pollution-board/pollutionBoard.html',
        controller: 'pollutionCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: './src/admin/admin.html',
        controller: 'adminCtrl'
      });
}]);
