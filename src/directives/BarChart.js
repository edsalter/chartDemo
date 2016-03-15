
app.directive('barChart',["BarChart", function(BarChart) {
    return {
        restrict: 'AE',
        template: '<div><br /><br /><button class="btn btn-default" ng-click="updateChart()">Refresh {{id}}</button></div>',
        scope: {
            labelX: "@",
            labelY: "@",
            width: "@",
            height: "@",
            id: "@",
            userData: "=",
            barColor: "@",
            highlightColor: "@",
            showAxisValues: "@"
        },
        link: function(scope) {
            var parsedUserData = [];

            //defaults
            var width = scope.width || 600,
                height = scope.height || 400,
                labelX = scope.labelX || "x",
                labelY = scope.labelY || "y",
                barColor = scope.barColor || "#FF7B26",
                highlightColor = scope.highlightColor || "#666",
                showAxisValues = scope.showAxisValues || false

            //update chart with latest data
            scope.updateChart = function () {
                try{
                    parsedUserData = JSON.parse(scope.userData);

                    //remove old chart if it exists
                    if(scope.chart){
                        scope.chart.remove();
                    }
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
                    color: barColor,
                    highlightColor: highlightColor,
                    showAxisValues: showAxisValues
                });
            }

            //init
            scope.updateChart();
        }
    };
}]);