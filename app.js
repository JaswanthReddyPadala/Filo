const menu = document.querySelector('.hamburger-mob');
const navbar = document.querySelector('.aside-nav');
const vio = document.querySelectorAll('.vio');


const chartData = [{  //chart data
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



//NAVBAR
menu.addEventListener("click", function() {
    navbar.classList.toggle("mob-nav-out");
})




// DARK THEME
let themeSwitch = document.querySelector('.theme-switch');
let isdark = true;

themeSwitch.addEventListener("click", function(){
    if(isdark){
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "#fafafa";
        for (let item of vio){
            item.style.color = "#f6f2ff";
        }
        isdark = false;
    }
    else{
        isdark=true;
        document.body.style.backgroundColor = "#fafafa";
        document.body.style.color = "#181818";
        for (let item of vio){
            item.style.color = "#51336f";
        }
    }
});
