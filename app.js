// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,  
//         // title:{
//         //     text: "Music Album Sales by Year"
//         // },
//         axisY: {
//             // title: "Units Sold",
//             valueFormatString: "#000,,.",
//             suffix: "GB",
//             // stripLines: [{
//             //     value: 3366500,
//             //     label: "Average"
//             // }]
//         },
//         data: [{
//             yValueFormatString: "### GB",
//             xValueFormatString: "###",
//             type: "spline",
//             dataPoints: [
//                 {x: "Mon", y: 2506000},
//                 {x: "Tue", y: 110},
//                 {x: "Wed", y: 140},
//                 {x: "Thu", y: 160},
//                 {x: "Fri", y: 180},
//                 {x: "Sat", y: 200},
//                 {x: "Sun", y: 1872000},
//             ]
//         }]
//     });
//     chart.render();
    
//     }



    const chartData = [{
        "label": "Mon",
        "value": "50"
    }, {
        "label": "Tue",
        "value": "150"
    }, {
        "label": "Wed",
        "value": "162"
    }, {
        "label": "Thu",
        "value": "25"
    }, {
        "label": "Fri",
        "value": "123"
    }, {
        "label": "Sat",
        "value": "115"
    }, {
        "label": "Sun",
        "value": "180"
    }];

    //STEP 3 - Chart Configurations
    const chartConfig = {
    type: 'spline',
    renderAt: 'chart-container',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "numberSuffix": " GB",
            "theme": "fusion",
            showHoverEffect:false
            },
        // Chart Data
        "data": chartData
        }
    };
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(chartConfig);
    fusioncharts.render();
    });