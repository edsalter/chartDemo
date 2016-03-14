(function () {
    'use strict';
    app.factory('BarChart', ['Chart', function(Chart) {
        return function(options){
            var barChart = new Chart(options);
            var fontFamily = "Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize   = 14;

            //create the axis labels
            var labelX = barChart.text(options.width/2, options.height - 5, options.labelX).attr({"font-family":fontFamily, "font-size":fontSize});

            var labelY = barChart.text(10, options.height/2, options.labelY).rotate(270).attr({"font-family":fontFamily, "font-size":fontSize});

            var bars = options.data || [];
            var barWidth = (barChart.width -30) / bars.length -5;

            var barMaxSize = _.max(bars, function(bar){
                return bar.value;
            }).value;

            var ratio = barMaxSize / barChart.height;

            var hoverLabelValue = barChart.text(40, 40, "").attr({fill: "#000"});

            var chartBottomPadding = 40,
                chartLeftPadding = 30;

            function createBar(inputBar){
                //normalise data http://stackoverflow.com/questions/13368046/how-to-normalize-a-list-of-positive-numbers-in-javascript
                var barHeight = inputBar.value / ratio;
                var x = ((barWidth * i) + 5 * i) + chartLeftPadding;
                var y = barChart.height - barHeight - chartBottomPadding;

                var labelPosition = {
                    x: x + barWidth/2,
                    y: barChart.height - 25
                };

                console.log(barHeight)

                //render bar
                var bar = barChart.rect(x, y, barWidth, barHeight).attr("fill", options.color).attr("stroke-width", 0);

                //render label
                barChart.text(labelPosition.x, labelPosition.y, inputBar.name).attr({fill: "#000"}).attr({"font-family":fontFamily, "font-size":fontSize});

                //Show value of bar on hover
                bar.hover(function(e){
                        hoverLabelValue.attr({text: this.name + ": " + this.value}).toFront().attr({"font-family":fontFamily, "font-size":fontSize});
                    },
                    function(e){
                        hoverLabelValue.attr({text: ""});
                    }, inputBar);

            }

            var barsCache = [];

            //create the chart's bars
            for(var i=0; i < bars.length; i++){
                barsCache.push(new createBar(bars[i]));
            }

            return barChart;
        };

    }]);
}());