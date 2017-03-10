angular
    .module('autocomplete', ['ngAnimate', 'ui.bootstrap'])
    .controller('MainCtrl', function($scope, $http) {

        $scope.selected = undefined;
        $http.get('http://localhost:63342/AutoComplete%20AngularJS%20Simple/countries.json')
            .success(function(retorno){
                $scope.countries = retorno;
            })
    });