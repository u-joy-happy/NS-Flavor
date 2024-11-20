
var data = {
    labels: [
        'Buttery',
        'Citrus',
        'Creamy',
        'Earthy',
        'Fatty',
        'Herbal',
        'Pine',
        'Slightly-Spicy',
        'Warm-Spicy',
        'Woody',
    ],
    datasets: [{
        // label: 'My First Dataset',
        data: [
            1.467184623,
            1.079485202,
            0.226546999,
            0.808400714,
            1.041552475,
            0.997576682,
            2.620967475,
            3.582611749,
            1.287310982,
            1.733656793,
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
        },
    },
    plugins: [{
        id: 'rotatedLabels',
        afterDraw: (chart) => {
            const ctx2 = chart.ctx;
            const rScale2 = chart.scales.r;
            const centerX2 = rScale2.xCenter;
            const centerY2 = rScale2.yCenter;
            const labels2 = chart.data.labels;
    
            labels2.forEach((label, index) => {
                const angle2 = rScale2.getIndexAngle(index) - Math.PI / 2; // 기존 각도 계산
                const distance2 = rScale2.drawingArea + 20; // 차트 외곽 거리
                const x2 = centerX2 + Math.cos(angle2) * distance2;
                const y2 = centerY2 + Math.sin(angle2) * distance2;
    
                ctx2.save();
                ctx2.translate(x2, y2); // 라벨 위치로 이동
                ctx2.rotate(angle2 + Math.PI / 2); // 기본 각도 + 90도 회전
                ctx2.textAlign = 'center'; // 텍스트 중앙 정렬
                ctx2.textBaseline = 'middle'; // 텍스트 중앙 기준선
                ctx2.font = '14px Nanum Square';
                ctx2.fillStyle = '#333';
                ctx2.fillText(label, 0, 0); // 회전된 상태로 텍스트 그리기
                ctx2.restore();
            });
        }
    }]
}


const polarArea2 = document.getElementById('detail-plot2');
new Chart(polarArea2, layout);
