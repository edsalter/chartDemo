(function () {

    'use strict';
    app.factory('BarChart', ['Chart', function(Chart) {
        return function(options){
            var barChart = new Chart(options);

            //create the axis labels
            var labelX = barChart.text(options.width/2, options.height - 5, options.labelX);
            var labelY = barChart.text(10, options.height/2, options.labelY).rotate(270);

            var bars = options.data || [];
            var barWidth = (barChart.width -30) / bars.length -5;

            var barMaxSize = _.max(bars, function(bar){
                return bar.value;
            }).value;

            var ratio = barMaxSize / barChart.height;

            var x,
                y,
                barHeight,
                chartBottomPadding = 30,
                chartLeftPadding = 30;

            var labelValue = barChart.text(40, 40, "").attr({fill: "#000"});

            //create the chart's bars
            for(var i=0; i < bars.length; i++){
                x = ((barWidth * i) + 5 * i) + chartLeftPadding;

                //normalise data http://stackoverflow.com/questions/13368046/how-to-normalize-a-list-of-positive-numbers-in-javascript
                barHeight = bars[i].value / ratio;

                console.log(barHeight)
                y = barChart.height - barHeight - chartBottomPadding;

                //render bar
                var bar = barChart.rect(x, y, barWidth, barHeight).attr("fill", "#FF7B26").attr("stroke-width", 0);

                //Show value of bar on hover
                bar.hover(function(e){
                    console.log(this.value);
                    labelValue = labelValue.attr({text: this.name + ": " + this.value}).toFront();
                },
                function(e){
                    labelValue = labelValue.attr({text: ""});
                }, bars[i]);

                //render label
                barChart.text(x + barWidth/2, barChart.height - 15, bars[i].name).attr({fill: "#000"});
            }

            return barChart;
        };

    }]);
}());