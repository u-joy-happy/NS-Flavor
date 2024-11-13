
var data = {
    labels: ['프링글스 사워크림 & 어니언', '워커스 치즈 양파', '포테토칩 고추장마요맛', '양파링', '알새우칩', '포카칩 오리지널', '포스틱', '포테토칩 오리지널', '레이즈 클래식', '아미카 알프레도 오리지널러플',],
    datasets: [{
        label: 'distance',
        data: [1.38, 1.39, 1.43, 1.44, 1.49, 1.51, 1.55, 1.55, 1.60, 1.62,],
        backgroundColor: [
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(242, 94, 134, 0.7)',
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
                anchor: 'end',
                align: 'end', 
            }
        },
        scales: {
            x: {
                min: 1.2,
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
