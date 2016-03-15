var app = angular.module('chartDemoRaphael', []);

app.controller('appController', function($scope){
    $scope.userData = '[{"name": "Dogs","value": 10},{"name": "Cats","value": 2},{"name": "Birds","value": 3},{"name": "Fish","value": 4},{"name": "Otters","value": 20}]';
    $scope.userData2 = '[{"name": "Data 1","value": 1},{"name": "Data 2","value": 2},{"name": "Data 3","value": 3},{"name": "Data 4","value": 5}]';

});