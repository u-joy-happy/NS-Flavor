
var data = {
    labels: ['포스틱', '양파링', '포테토칩 먹태청양마요맛', '새우깡', '먹태깡 청양마요맛', '알새우칩', '인디안밥', '포테토칩 고추장마요맛', '조청유과', '레이즈 맥스 칠리', ],
    datasets: [{
        label: 'distance',
        data: [89.0, 73.5, 66.2, 65.7, 64.7, 62.7, 58.1, 57.1, 56.3, 56.1, ],
        backgroundColor: [
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            'rgb(242, 148, 65, 0.7)',
            // 'rgb(242, 94, 134, 0.7)',
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
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 30,
                right: 30
            }
        },
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
            datalabels: {
                formatter: (value) => `${value}%`,
                anchor: 'end',
                align: 'end', 
            }
        },
        scales: {
            x: {
                // min: 40,
                // max: 90,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
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
    plugins: [ChartDataLabels] // 플러그인 활성화
}

const compoBar = document.getElementById('compo-bar-chart');
new Chart(compoBar, layout);
