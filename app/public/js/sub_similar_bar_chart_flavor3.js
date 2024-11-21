
var data = {
    labels: ['포테토칩 오리지널', '레이즈 클래식', '포스틱', '알새우칩', '아미카 알프레도 오리지널러플', '포테토칩 고추장마요맛', '워커스 치즈 양파', '조청유과', '프링글스 사워크림 & 어니언', '양파링', ],
    datasets: [{
        label: 'distance',
        data: [89.76, 82.21, 79.06, 74.49, 72.35, 70.21, 67.01, 58.90, 57.62, 57.52, ],
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

const flavorBar3 = document.getElementById('flavor-bar-chart3');
new Chart(flavorBar3, layout);
