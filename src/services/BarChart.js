app.factory('BarChart', ['Chart', function(Chart) {
    return function(options){
        var options = options || {};
        var barChart = new Chart(options);

        var bars = options.data || [];

        var barWidth = barChart.width/bars.length -5;

        //create the bars
        for(var bar in bars){
            var x = (barWidth * bar) + 5 * bar;

            var y = barChart.height - bars[bar].value;

            var height = bars[bar].value;

            barChart.rect(x, y, barWidth, height).attr("fill", "#f00");
        }

        return barChart;
    };

}]);