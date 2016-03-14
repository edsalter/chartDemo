
app.directive('barChart',["BarChart", function(BarChart) {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<div><br /><br /><button ng-click="updateChart()">Refresh</button></div>',
        scope: {
            labelX: "@",
            labelY: "@",
            width: "@",
            height: "@",
            id: "@",
            userData: "="
        },
        link: function(scope) {
            var parsedUserData = [];

            var width = scope.width || 400,
                height = scope.height || 300,
                labelX = scope.labelX || "x",
                labelY = scope.labelY || "y";

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
                    width: width,
                    height: height,
                    id: scope.id,
                    data:parsedUserData,
                    labelX: labelX,
                    labelY: labelY
                });
            }

            //init
            scope.updateChart();
        }
    };
}]);