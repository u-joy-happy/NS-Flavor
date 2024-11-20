
var data = {
    labels: [
        'Caramel',
        'Fruity',
        'Green',
        'Malty',
        'Meaty',
        'Nutty',
        'Roasted',
        'Savory',
        'Sulfurous',
        'Sweet',
    ],
    datasets: [{
        // label: 'My First Dataset',
        data: [
            2.101206345,
            1.562159802,
            1.002088658,
            1.00276169,
            1.84794283,
            0.459492845,
            0.39243866,
            2.904158319,
            1.209827551,
            0.931699344,
        ],
        backgroundColor: [
            '#F25E86',
            '#9163F2',
            '#4BC0C0',
            '#F29441',
            '#F2AFC1',
            '#38ABF2',
            '#F2BA52',
            '#4BBF70',
            '#F26D5E',
            '#C9CBCF',
            '#4B76BF',
        ]
    }]

}

var layout = {
    type: 'polarArea',
    data: data,
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30
            }
        },
        scales: {
            r: {
                pointLabels: {
                    display: false,
                    centerPointLabels: true,
                    font: {
                        size: 15
                    }
                },
                grid: {
                    color: 'white',
                    circular: true,
                    z: 1,
                    lineWidth: 2
                },
                ticks: {
                    display: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    },
    plugins: [{
        id: 'rotatedLabels',
        afterDraw: (chart) => {
            const ctx3 = chart.ctx;
            const rScale3 = chart.scales.r;
            const centerX3 = rScale3.xCenter;
            const centerY4 = rScale3.yCenter;
            const labels = chart.data.labels;
    
            labels.forEach((label, index) => {
                const angle3 = rScale3.getIndexAngle(index) - Math.PI / 2; // 기존 각도 계산
                const distance3 = rScale3.drawingArea + 20; // 차트 외곽 거리
                const x3 = centerX3 + Math.cos(angle3) * distance3;
                const y3 = centerY4 + Math.sin(angle3) * distance3;
    
                ctx3.save();
                ctx3.translate(x3, y3); // 라벨 위치로 이동
                ctx3.rotate(angle3 + Math.PI / 2); // 기본 각도 + 90도 회전
                ctx3.textAlign = 'center'; // 텍스트 중앙 정렬
                ctx3.textBaseline = 'middle'; // 텍스트 중앙 기준선
                ctx3.font = '14px Nanum Square';
                ctx3.fillStyle = '#333';
                ctx3.fillText(label, 0, 0); // 회전된 상태로 텍스트 그리기
                ctx3.restore();
            });
        }
    }]
}


const polarArea3 = document.getElementById('detail-plot3');
new Chart(polarArea3, layout);
