
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
        scales: {
            r: {
                pointLabels: {
                    display: true,
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
        // scales: {
        //     y: {
        //     beginAtZero: true
        //     }
        // }
    },
    // plugins: {
    //     afterDraw: (chart) => {
    //         const { ctx, chartArea, scales } = chart;
    //         const radiusSteps = scales.r.ticks.length;

    //         for (let i = 1; i < radiusSteps; i++) {
    //             const radius = (scales.r.getDistanceFromCenterForValue(scales.r.ticks[i].value));
    //             ctx.beginPath();
    //             ctx.arc(
    //                 chartArea.width / 2 + chartArea.left,
    //                 chartArea.height / 2 + chartArea.top,
    //                 radius,
    //                 0,
    //                 2 * Math.PI
    //             );
    //             ctx.strokeStyle = 'white';
    //             ctx.lineWidth = 1;
    //             ctx.stroke();
    //             ctx.closePath();
    //         }
    //     }
    // }
}


const polarArea = document.getElementById('detail-plot');
new Chart(polarArea, layout);
