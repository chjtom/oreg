WidgetCollection = new Mongo.Collection('widget');

if (Meteor.isClient) {
  angular.module('oreg', ['angular-meteor']);
  angular.module('oreg').controller('oregCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.underwear = $meteor.collection(WidgetCollection);

    $scope.addPumbanolla = function() {
      $scope.underwear.push({size:"pumbanolla"});
    }
    $scope.addTanga = function() {
      $scope.underwear.push({size:"tanga"});
    }
  }]);
}

if (Meteor.isServer) {
  console.log('Testing');
}