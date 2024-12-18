
var data = {
    labels: [
        'Caramel',
        'Citrus',
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
            0.652346249,
            -0.734052047,
            0.349403663,
            0.528281017,
            1.262305557,
            0.340411365,
            0.713118334,
            0.64048554,
            0.937953579,
            1.429767129,
            0.417878208,
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
            const ctx = chart.ctx;
            const rScale = chart.scales.r;
            const centerX = rScale.xCenter;
            const centerY = rScale.yCenter;
            const labels = chart.data.labels;
    
            labels.forEach((label, index) => {
                const angle = rScale.getIndexAngle(index) - Math.PI / 2; // 기존 각도 계산
                const distance = rScale.drawingArea + 20; // 차트 외곽 거리
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
    
                ctx.save();
                ctx.translate(x, y); // 라벨 위치로 이동
                ctx.rotate(angle + Math.PI / 2); // 기본 각도 + 90도 회전
                ctx.textAlign = 'center'; // 텍스트 중앙 정렬
                ctx.textBaseline = 'middle'; // 텍스트 중앙 기준선
                ctx.font = '14px Nanum Square';
                ctx.fillStyle = '#333';
                ctx.fillText(label, 0, 0); // 회전된 상태로 텍스트 그리기
                ctx.restore();
            });
        }
    }]
}


const polarArea = document.getElementById('detail-plot');
new Chart(polarArea, layout);
