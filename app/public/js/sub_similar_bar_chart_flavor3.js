
var data = {
    labels: ['레이즈 인도매직마살라', '치오 토릴라 나초치즈', '워커스 새우', '스미스 소금 & 식초', '레이즈 요피맛', '무뚝뚝감자칩 통후추소금맛', '레이즈 미엥캄 향신료맛', '타키스 케틀즈 푸에고', '로렌즈 로즈마리', '레이즈 구운새우와 해산물소스', ],
    datasets: [{
        label: 'distance',
        data: [81, 79, 79, 72, 69, 69, 65, 62, 62, 55, ],
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

const flavorBar3 = document.getElementById('flavor-bar-chart');
new Chart(flavorBar3, layout);
