
app.directive('barChart',["BarChart", function(BarChart) {
    return {
        restrict: 'AE',
        template: '<div><br /><br /><button ng-click="updateChart()">Refresh {{id}}</button></div>',
        scope: {
            labelX: "@",
            labelY: "@",
            width: "@",
            height: "@",
            id: "@",
            userData: "=",
            barColor: "@"
        },
        link: function(scope) {
            var parsedUserData = [];

            var width = scope.width || 600,
                height = scope.height || 400,
                labelX = scope.labelX || "x",
                labelY = scope.labelY || "y",
                color = scope.barColor || "#FF7B26"

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
                    labelY: labelY,
                    color: color
                });
            }

            //init
            scope.updateChart();
        }
    };
}]);