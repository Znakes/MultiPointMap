angular.module('myApp.services', [])
.factory('geocodeService', function($http) {
  var geocodeAPI = {};

  geocodeAPI.getPlaces = function(place) {
    return $http({
      //method: 'JSON', 
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(place)+'&key=AIzaSyCwm5pLMddsYrSHSs0HFoEF9DgqWOaCjJE'
    });
  }

  return geocodeAPI;
});