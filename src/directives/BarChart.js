
app.directive('barChart',["BarChart", function(BarChart) {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<div><br /><br /><button ng-click="updateChart()">Refresh</button></div>',
        scope: {
            xLabel: "@",
            yLabel: "@",
            width: "@",
            height: "@",
            id: "@",
            userData: "="
        },
        link: function(scope) {
            var parsedUserData = [];

            //update chart with latest data
            scope.updateChart = function () {
                //remove old chart if it exists
                if(scope.chart){
                    scope.chart.remove();
                }

                try{
                    parsedUserData = JSON.parse(scope.userData);
                }
                catch (e){
                    console.error("Invalid input");
                }

                scope.chart = new BarChart({
                    width: 320,
                    height: 200,
                    id: scope.id,
                    data:parsedUserData
                });
            }

            //init
            scope.updateChart();
        }
    };
}]);