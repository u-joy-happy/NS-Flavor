
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
                        size: 18
                    }
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
    }
}


const polarArea = document.getElementById('detail-plot');
new Chart(polarArea, layout);
