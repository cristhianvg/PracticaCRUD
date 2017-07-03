angular.module('PracticaCRUD').controller('loginController', ['$scope', 'securityService', '$sessionStorage', '$location', function ($scope, security, $sessionStorage, $location) {
    $scope.datos = {};
    $scope.usuarioErroneo = false;

    $scope.submit = function () {
      security.validateUserAndPassword($scope.datos).then(function successCallback(response) {
        // console.log(response);
        $scope.usuarioErroneo = false;
        if (response.data.code == 500) {
          $scope.usuarioErroneo = true;
          $scope.datos = {};
        } else {
          $sessionStorage.usuario = response.data.datos[0];
          $location.path('/inicio');
        }
      }, function errorCallback(response) {
        console.error(response);
      });

    };
  }]);


