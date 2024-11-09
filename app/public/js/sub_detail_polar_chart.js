
var data = {
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
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
