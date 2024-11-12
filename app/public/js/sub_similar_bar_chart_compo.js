
var data = {
    labels: ['감자깡', '먹태깡 청양마요맛', '포카칩 오리지널', '포테토칩 오리지널', '인디안밥', '새우깡', '알새우칩', '수미칩 오리지널', '포스틱', '조청유과', ],
    datasets: [{
        label: 'distance',
        data: [1.004595215, 1.004915026, 1.0051932, 1.005310371, 1.005631741, 1.005636019, 1.005822663, 1.005893995, 1.006061427, 1.006685787, ],
        backgroundColor: [
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 94, 134, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
        ],
    }]
};


var layout = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
              display: true,
              text: '화합물 기준 거리 Top 10',
              padding: 25,
              font: {
                  size: 22
              }
            },
        },
        scales: {
            x: {
                min: 1.0035,
                grid: {
                    display: false
                },
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    // stepSize: 5
                }
            },
        },
    },
}

const compoBar = document.getElementById('compo-bar-chart');
new Chart(compoBar, layout);
