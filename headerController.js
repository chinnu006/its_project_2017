var app = angular.module('airnwater-app');

app.controller('headerCtrl', function($location){
  this.isActive = function(path) {
    var currentRoute = $location.path();
    return path === currentRoute ? 'active' : 'false';
  }
});
