var app = angular.module('airnwater-app');

app.controller('dashboardCtrl', function($scope){

  /**
  -- AIR QUALITY GRAPH --
  **/
  Highcharts.chart('air-quality', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Air Quality'
        },
        // subtitle: {
        //     text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
        // },
        xAxis: {
            type: 'Devices'
        },
        yAxis: {
            title: {
                text: 'Quality Levels'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                },
                cursor : 'pointer',
                events: {
                    click: function () {
                        detailedCharts1();
                    }
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Nodes',
            colorByPoint: true,
            data: [{
                name: 'S1',
                y: 56.33
            }, {
                name: 'S2',
                y: 24.03
            }, {
                name: 'S3',
                y: 10.38
            }, {
                name: 'S4',
                y: 4.77
            }]
        }]
    });


    /**
    -- WATER QUALITY GRAPH --
    **/
    Highcharts.chart('water-quality', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Water Quality'
          },
          // subtitle: {
          //     text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
          // },
          xAxis: {
              type: 'Devices'
          },
          yAxis: {
              title: {
                  text: 'Quality Levels'
              }

          },
          legend: {
              enabled: false
          },
          plotOptions: {
              series: {
                  borderWidth: 0,
                  dataLabels: {
                      enabled: true,
                      format: '{point.y:.1f}%'
                  },
                  cursor : 'pointer',
                  events: {
                      click: function () {
                          detailedCharts();
                      }
                  }
              }
          },

          tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },

          series: [{
              name: 'Nodes',
              colorByPoint: true,
              data: [{
                  name: 'W1',
                  y: 34.56
              }, {
                  name: 'W2',
                  y: 40.78
              }, {
                  name: 'W3',
                  y: 23.54
              }, {
                  name: 'W4',
                  y: 60.44
              }]
          }]
      });


      /**
      -- Detailed Charts --
      **/
      Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        // Create the chart
      function detailedCharts () {
        $scope.isDetailed = true;
        var target1 = angular.element('.airQualityGraph').remove();
        var target2 = angular.element('.waterQualityGraph').remove();
        Highcharts.stockChart('detailed-chart1', {
            chart: {
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: 'Live random data'
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }]
        });



        /********************************************
        =================
        *****************/
        Highcharts.chart('detailed-chart2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Contribution Values'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Sensor Parameters',
                colorByPoint: true,
                data: [{
                    name: 'pH Value',
                    y: 56.33
                }, {
                    name: 'Conductivity',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Turbidity',
                    y: 10.38
                }, {
                    name: 'Dissolved Oxigen',
                    y: 4.77
                }]
            }]
        });
      
        /**************************
        ===========================
        ***************************/


      };

      function detailedCharts1 () {
        $scope.isDetailed = true;
        var target1 = angular.element('.airQualityGraph').remove();
        var target2 = angular.element('.waterQualityGraph').remove();
        Highcharts.stockChart('detailed-chart1', {
            chart: {
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: 'Live random data'
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }]
        });



        /********************************************
        =================
        *****************/
        Highcharts.chart('detailed-chart2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Contribution Values'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Sensor Parameters',
                colorByPoint: true,
                data: [{
                    name: 'Humidity',
                    y: 56.33
                }, {
                    name: 'Carbon Monoxide',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Sulphur Dioxide',
                    y: 10.38
                }, {
                    name: 'Ozone Monitoring',
                    y: 4.77
                }]
            }]
        });
      
        /**************************
        ===========================
        ***************************/


      };


});
