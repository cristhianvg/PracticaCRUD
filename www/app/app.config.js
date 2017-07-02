angular.module('PracticaCRUD').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/login', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html'
                }).
                otherwise('/login');
    }
]);