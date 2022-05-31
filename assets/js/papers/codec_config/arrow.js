$(function () {
    $(document).ready(function() {

   

        var bar_options = {
            title: {text: ''},
            subtitle: {text: ''},
            chart: {
                height: '80%',
                type: 'bar',
                zoomType: 'xy',
            },
            legend: {
                enabled: true
            },
            tooltip: {
                valueDecimals: 3
            },
            xAxis: {
                title: {
                    text: ''
                },
                type: 'category',
                categories: []
            },
            yAxis: {title: {text: ''}},
            plotOptions: {
                bar: {  
                    dataLabels: {
                            enabled: true, 
                            format: "{y:.3f}",
                            allowOverlap: true,
                    },
                    grouping: false,
                },
                series: {
                    showCheckbox: false,
                    events: {
                        legendItemClick: function () {
                            var last_elem = Highcharts.charts.length-1;

                            // find chart that we need to change by title
                            for (let i = Highcharts.charts.length - 1; i >= 0; i--) {
                                var t = Highcharts.charts[i].userOptions.title.text;
                                if (t.includes("correlation for codecs of")) {
                                    last_elem = i;
                                    break;
                                }
                            }

                            
                            ret = change_after_hide(Highcharts.charts[last_elem].userOptions.series, this);

                            Highcharts.charts[last_elem].userOptions.series = ret[0];
                            Highcharts.charts[last_elem].userOptions.xAxis.categories = ret[1];

                            Highcharts.charts[last_elem].userOptions.plotOptions.bar.dataLabels.allowOverlap = ret[1].length > 50;


                            var min_ = get_min_of_series(Highcharts.charts[last_elem].userOptions.series, this);
                            Highcharts.charts[last_elem].yAxis[0].setExtremes(min_,null);
                            Highcharts.charts[last_elem].render();
                            Highcharts.charts[last_elem].redraw();


                            // find minimum value of y coord to set extremes or plot
                            function get_min_of_series(series, category) {
                                var cur_category_clicked = category.index;
                                var y_coords = [];

                                var length = category.chart.series.length;
                                for (let i = 0; i < length; i++) {
                                    if (  (category.chart.series[i].visible && i != cur_category_clicked) 
                                      || (!category.chart.series[i].visible && i == cur_category_clicked)) {
                                        y_coords.push(category.chart.series[i].yData);
                                    }
                                }
                                y_coords = y_coords.flat().flat().sort(function (a, b) {  return b - a;  });
                                return y_coords[y_coords.length-1];
                            }

                            function change_after_hide(series, category) {
                                var cur_category_clicked = category.index;
                                var visibility_of_cur_category = !category.visible;
                                var x_coords = category.xData;
                                var y_coords = [];

                                var length = category.chart.series.length;
                                for (let i = 0; i < length; i++) {
                                    if (  (category.chart.series[i].visible && i != cur_category_clicked) 
                                      || (!category.chart.series[i].visible && i == cur_category_clicked)) {
                                        y_coords.push(category.chart.series[i].yData);
                                    }
                                }
                                y_coords = y_coords.flat().flat().sort(function (a, b) {  return b - a;  });

                                labels = Array(y_coords.length);
                                for (var cat in category.chart.series) {
                                    if (  (category.chart.series[cat].visible && cat != cur_category_clicked) 
                                      || (!category.chart.series[cat].visible && cat == cur_category_clicked)) {
                                        var len = category.chart.series[cat].xData.length;
                                        for (let i = 0; i < len; i++) {
                                            var old_x = series[cat]['data'][i].x;
                                            var new_x = y_coords.indexOf(series[cat]['data'][i].y);
                                            series[cat]['data'][i].x = new_x;// y_coords.indexOf(series[cat]['data'][i].x);
                                            y_coords[new_x] = -1;

                                            labels[new_x] = series[cat]['data'][i].name;
                                        }
                                    }
                                    else {                                      
                                        var len = category.chart.series[cat].xData.length;
                                        for (let i = 0; i < len; i++) {
                                            series[cat]['data'][i].x = -1;
                                        }
                                    }
                                }

                                return [series, labels]
                            }
                        }
                    }
                }
            },
            series: [],
            credits: {
                text: 'videoprocessing.ai',
                href: 'https://videoprocessing.ai/'
            },
            series: []
        };
        


        json_path = '../assets/json/papers/codec_config/data_for_barchart.json';
        
        current_url = window.location.href;
        
        console.log('all');


        $.getJSON(json_path, function (data) {
            bar_options.title.text  = data["title"];
            var dataLen = data["data"].length;
            for (var ix = 0; ix < dataLen; ix++) {
                bar_options.series.push(data["data"][ix]);
            }
            bar_options.yAxis.title.text = data["yAxis_title"];
            Highcharts.chart('leaderboard_plot', bar_options);
        });
     });
});
