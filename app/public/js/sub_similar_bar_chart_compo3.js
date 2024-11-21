
var data = {
    labels: ['트릴라 칩스', '아미카 알프레도 오리지널러플', '아미카 엘도라다', '레이즈 클래식', '허니버터칩', '워커스 치즈 양파', '워커스 레디 솔트', '프링글스 오리지널', '레이즈 인도매직마살라', '무뚝뚝감자칩 통후추소금맛', ],
    datasets: [{
        label: 'distance',
        data: [32.81, 32.14, 30.92, 30.65, 28.93, 28.05, 28.02, 28.02, 27.61, 27.17, ],
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
                // max: 115,
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

const compoBar3= document.getElementById('compo-bar-chart3');
new Chart(compoBar3, layout);
