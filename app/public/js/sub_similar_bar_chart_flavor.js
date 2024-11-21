
var data = {
    labels: ['포카칩 오리지널', '레이즈 클래식', '포스틱', '워커스 치즈 양파', '아미카 알프레도 오리지널러플', '포테토칩 고추장마요맛', '알새우칩', '양파링', '감자깡', '티카 칩스 파타고니아', ],
    datasets: [{
        label: 'distance',
        data: [89.7, 86.4, 77.7, 77.6, 73.7, 73.2, 68.8, 60.9, 59.5, 55.4, ],
        backgroundColor: [
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            // 'rgb(242, 94, 134, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
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
                text: 'Flavor 강도 기준 거리 Top 10',
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
                // min: 0.2,
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

const flavorBar = document.getElementById('flavor-bar-chart');
new Chart(flavorBar, layout);
