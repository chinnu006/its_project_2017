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

});
