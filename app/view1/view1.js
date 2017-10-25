'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'mapCtrl'
  });
}])

.controller('mapCtrl', function($scope, NgMap, geocodeService) {

  $scope.map = null;
  NgMap.getMap().then(map => $scope.map = map);
  
  $scope.rowData;

  $scope.places = [];

  $scope.parseData = function() {
      $scope.places = [];

      var tempPlaces = $scope.rowData.split("\n")

      tempPlaces.forEach(function(element) {
        var engPlace = element.replace(/[^A-Za-z]/g, ' ');
        var place = geocodeService.getPlaces(engPlace).then(geoData=> {
          geoData.data.results[0].address_components[0].long_name = engPlace;
          $scope.places.push(geoData.data.results[0]);
        });
      }, this);
    };
});