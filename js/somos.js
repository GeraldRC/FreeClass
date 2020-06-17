$(document).ready(function () {
    $('#tabla').DataTable();
});
//script gráfico de dona
var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Java',
            'SQL',
            'Html',
            'Javascript',
            'Css'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Lenguajes mas usados en nuestros proyectos:'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

window.onload = function () {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function () {
    config.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });
    });

    window.myDoughnut.update();
});

document.getElementById('changeCircleSize').addEventListener('click', function () {
    if (window.myDoughnut.options.circumference === Math.PI) {
        window.myDoughnut.options.circumference = 2 * Math.PI;
        window.myDoughnut.options.rotation = -Math.PI / 2;
    } else {
        window.myDoughnut.options.circumference = Math.PI;
        window.myDoughnut.options.rotation = -Math.PI;
    }

    window.myDoughnut.update();
});
