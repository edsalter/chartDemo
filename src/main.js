var app = angular.module('chartDemoRaphael', []);

app.controller('appController', function($scope){
    var userData = '[{"name": "Data 1","value": 100},{"name": "Data 2","value": 50},{"name": "Data 3","value": 33},{"name": "Data 4","value": 200}]';

    $scope.userData = userData;

    $scope.reset = function () {
        $scope.userData = userData;
    }
});