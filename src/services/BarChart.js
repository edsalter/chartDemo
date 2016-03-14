(function () {

    'use strict';
    app.factory('BarChart', ['Chart', function(Chart) {
        return function(options){
            var options = options || {};
            var barChart = new Chart(options);

            var bars = options.data || [];
            var barWidth = barChart.width / bars.length -5;

            var barMaxHeight = _.max(bars, function(bar){
                return bar.value;
            }).value;

            var ratio = barMaxHeight / barChart.height;

            var x,
                y,
                height;

            //create the chart elements
            for(var bar in bars){
                x = (barWidth * bar) + 5 * bar;

                //normalise data http://stackoverflow.com/questions/13368046/how-to-normalize-a-list-of-positive-numbers-in-javascript
                height = bars[bar].value / ratio;
                y = barChart.height - height;

                //render bar
                barChart.rect(x, y, barWidth, height).attr("fill", "#FF7B26").attr("stroke-width", 0);

                //render label
                barChart.text(x + barWidth/2, barChart.height - 10, bars[bar].name).attr({fill: "#000"});
            }

            return barChart;
        };

    }]);
}());