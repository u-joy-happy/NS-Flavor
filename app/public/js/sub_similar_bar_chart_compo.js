
var data = {
    labels: ['레이즈 요피맛', '워커스 새우', '스미스 소금 & 식초', '레이즈 소금 & 식초', '워커스 소금 식초', '타키스 케틀즈 푸에고', '레이즈 구운새우와 해산물소스', '양파깡', '크로키 감자칩 파프리카', '프링글스 오리지널', ],
    datasets: [{
        label: 'distance',
        data: [0.001267534, 0.001373819, 0.001387407, 0.001396739, 0.001534383, 0.00261002, 0.025279786, 0.099847024, 0.418798424, 0.4381665, ],
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
                anchor: 'end',
                align: 'end', 
            }
        },
        scales: {
            x: {
                min: 0.001,
                max: 0.5,
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
