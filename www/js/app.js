// Ionic Starter App


//device ready event to execute when the device is ready, injected by cordova.js file 
document.addEventListener("deviceready", function(){

  alert("Device Ready " + JSON.stringify(navigator.camera)); 

}, false);

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

//Add a controller that will contain function you may call in index.html
.controller("takePicture", function($scope, $http){
  $scope.model = {};
  $scope.model.imageSource = "../img/ionic.png"; //default image

  $scope.takePhoto = function() {
    alert("Taking a picture");
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(function(imageData){
      //alert(imageData);
      $http.get(imageData).then(function(oData) {
        alert(oData);
      });

      $scope.model.imageSource = imageData;
      $scope.$apply();  //Alert Angular that this is a callback
      // console.log(JSON.stringify(imageData));
    },
    function(message) {
      console.log(message);

    },
    { quality: 100 });
  }

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
