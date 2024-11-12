
var data = {
    labels: ['Caramel', 'Citrus', 'Earthy', 'Floral', 'Fruity', 'Green', 'Herbal', 'Malty', 'Meaty', 'Mushroom', 'Nutty', 'Pine', 'Pungent', 'Roasted', 'Savory', 'Sour', 'Sulfurous', 'Sweet', 'Woody', 'Buttery', 'Creamy', 'Rancid', 'Fresh', 'Vanilla', 'Fishy', 'Fatty', 'Warm-Spicy', 'Slightly-Spicy', 'Balsamic', ],
    datasets: [{
        label: '제품군집',
        data: [-0.740712035, 1.335853304, 0.750272487, 0.216940496, -1.101620558, -0.842216986, 1.76499505, -0.188713569, -0.932043301, -0.358727606, -0.826037137, 1.588199151, 0.335650721, -0.871705688, -0.721651181, 0.348084656, -0.157133578, -0.67376742, 1.567222952, -0.370944662, -0.571645466, -0.295525991, 0.710869068, 0.158964576, -0.12620088, 0.302268299, 1.405968547, 0.746495878, -0.144337567, ],
        // fill: false,
        borderColor: '#64A5D3',
        pointRadius: 0,

    },{
        label: '치오 팝칩 파프리카',
        data: [-1.086285866, 1.079485202, 0.808400714, 0.098920538, -1.060295781, -1.02475514, 0.997576682, -0.583339719, -0.731611011, -0.358727606, -1.400427414, 2.620967475, -0.034324818, -1.123403385, -0.460236458, 0.149390084, -0.67187772, -0.010306072, 1.733656793, 1.467184623, 0.226546999, -0.295525991, -0.014667987, -0.254624675, -0.428203607, 1.041552475, 1.287310982, 3.582611749, -0.144337567, ],
        // fill: false,
        borderColor: '#F2B05E',
        pointRadius: 0,
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
                max: 5,
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
