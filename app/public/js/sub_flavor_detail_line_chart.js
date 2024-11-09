
var data = {
    labels: ['0', '1', '2', '3'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 81, 40, 30],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        pointRadius: 0,
    }]
};


var layout = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        // maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false                     // X축의 그리드 라인 없애기
                },
                ticks: {
                    display: true                     // X축 레이블 숨기기 (필요한 경우)
                }
            },
            y: {
                grid: {
                    display: false                     // Y축의 그리드 라인 없애기
                },
                ticks: {
                    display: false                     // Y축 레이블 없애기
                }
            },
        },
    },
}

const lineArea = document.getElementById('flavor-line-plot');
new Chart(lineArea, layout);
