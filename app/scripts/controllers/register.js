'use strict';

angular.module('jwtprojectApp')
  .controller('RegisterCtrl', function($scope, $http, alert) {
    $scope.submit = function() {


      var url = 'http://localhost:3000/register';
      var user = {
        name: 'Alex'
      };

      $http.post(url, user)
        .success(function() {
          alert('success', 'OK!', 'You are now registered');
        })
        .error(function(res) {
          alert('warning', 'Opps!', 'Could not register');
        });
    }
  });
