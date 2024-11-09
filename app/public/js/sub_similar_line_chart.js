
var data = {
    labels: ['Terpene', 'Pine', 'Herbal', 'Spicy', 'Citrus', 'Woody', 'Pungent', 'Earthy', 'Fresh', 'Sour', 'Garlic/Onion', 'Fatty', 'Floral'],
    datasets: [{
        label: 'data1',
        data: [6, 8, 4, 7, 5, 2, 4, 1, 6, 3, 4, 8, 1],
        fill: false,
        borderColor: '#64A5D3',
    },{
        label: 'data2',
        data: [5, 9, 3, 5, 6, 3, 2, 5, 5, 2, 5, 9, 2],
        fill: false,
        borderColor: '#F2B05E',
    }]
};


var layout = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
            },
            y: {
                max: 20,
                grid: {
                    display: false
                },
                ticks: {
                    stepSize: 5
                }
            },
        },
    },
}

const simLineArea = document.getElementById('similar-plot');
new Chart(simLineArea, layout);
