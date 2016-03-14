var app = angular.module('chartDemoRaphael', []);

app.controller('appController', function($scope){
    var userData = '[{"name": "Data 1","value": 1},{"name": "Data 2","value": 2},{"name": "Data 3","value": 3},{"name": "Data 4","value": 4}]';

    $scope.userData = userData;

    $scope.reset = function () {
        $scope.userData = userData;
    }
});