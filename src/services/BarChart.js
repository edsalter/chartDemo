(function () {
    'use strict';
    app.factory('BarChart', ['Chart', function(Chart) {
        return function(options){
            var barChart = new Chart(options);
            var fontFamily = "Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize   = 14;

            var bars = options.data || [];
            var barWidth = (barChart.width -30) / bars.length -5;

            var barMaxSize = _.max(bars, function(bar){
                return bar.value;
            }).value;

            var ratio = barMaxSize / barChart.height;

            var chartBottomPadding = 40,
                chartLeftPadding = 30;

            //create the axis labels
            var labelX = barChart.text(options.width/2, options.height - 5, options.labelX).attr({"font-family":fontFamily, "font-size":fontSize});
            var labelY = barChart.text(10, options.height/2, options.labelY).rotate(270).attr({"font-family":fontFamily, "font-size":fontSize});

            if(options.showAxisValues){
                var yScaleLine = barChart.rect(chartLeftPadding,0,1,options.height-chartBottomPadding)
                    .attr("stroke-width", 1);
                var xScaleLine = barChart.rect(chartLeftPadding,options.height-chartBottomPadding,options.width,1)
                    .attr("stroke-width", 1);

                var yAxisValue = barChart.text(0, 20, barMaxSize)
                    .attr({"text-anchor": "start"})
                    .attr({"font-family":fontFamily, "font-size":fontSize});
            }

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
                var bar = barChart.rect(x, y, barWidth, barHeight)
                    .attr("fill", options.color)
                    .attr("stroke-width", 0)
                    .toBack();

                //render individual bar label
                barChart.text(labelPosition.x, labelPosition.y, inputBar.name)
                    .attr({fill: "#000"})
                    .attr({"font-family":fontFamily, "font-size":fontSize});

                var hoverLabelValue;

                //Show value of bar on hover
                bar.hover(function(e){
                        hoverLabelValue = barChart.text(labelPosition.x, barChart.height-60, "Value:" + inputBar.value)
                            .toFront()
                            .attr({"font-family":fontFamily, "font-size":fontSize})
                            .attr({fill: options.color});;

                        bar.attr({fill: options.highlightColor});
                    },
                    function(e){
                        hoverLabelValue.attr({text: ""});
                        bar.attr({fill: options.color})
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