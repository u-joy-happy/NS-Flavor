
var data = {
    labels: ['레이즈 요피맛', '워커스 새우', '스미스 소금 & 식초', '레이즈 소금 & 식초', '워커스 소금 식초', '타키스 케틀즈 푸에고', '레이즈 구운새우와 해산물소스', '양파깡', '크로키 감자칩 파프리카', '프링글스 오리지널', ],
    datasets: [{
        label: 'distance',
        data: [99.87, 99.86, 99.86, 99.86, 99.85, 99.74, 97.49, 90.09, 58.42, 56.50, ],
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
                max: 115,
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
