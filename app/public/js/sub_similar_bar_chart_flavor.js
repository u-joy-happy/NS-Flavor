
var data = {
    labels: ['아미카 알프레도 오리지널러플', '레이즈 클래식', '포테토칩 오리지널', '포스틱', '포카칩 오리지널', '알새우칩', '양파링', '포테토칩 고추장마요맛', '워커스 치즈 양파', '프링글스 사워크림 & 어니언', ],
    datasets: [{
        label: 'distance',
        data: [ 1.62,  1.60,  1.55,  1.55,  1.51,  1.49,  1.44,  1.43,  1.39,  1.38, ],
        backgroundColor: [
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(242, 94, 134, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
            'rgb(56, 171, 242, 0.7)',
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
              text: 'Flavor 강도 기준 유사도 Top 10',
              padding: 25,
              font: {
                  size: 22
              }
            },
        },
        scales: {
            x: {
                min: 1.2,
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

const flavorBar = document.getElementById('flavor-bar-chart');
new Chart(flavorBar, layout);
