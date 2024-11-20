
var data = {
    labels: ['Sulfurous', 'Malty', 'Savory', 'Nutty', 'Caramel', 'Roasted', 'Green', 'Sweet', 'Fruity', 'Meaty', 'Balsamic', 'Vanilla', 'Rancid', 'Slightly-Spicy', 'Fatty', 'Mushroom', 'Warm-Spicy', 'Fishy', 'Woody', 'Earthy', 'Buttery', 'Pine', 'Herbal', 'Creamy', 'Fresh', 'Citrus', 'Sour', 'Floral', 'Pungent', ],
    datasets: [{
        label: '제품군집',
        data: [-0.646430375, -0.268679039, -0.012505512, 0.265132109, 0.461983851, 0.247048229, 0.315677581, -0.474995242, 0.038860239, -0.068475495, -0.138675049, 1.19799093, 0.207785418, 0.109524711, -0.056999951, 2.688888095, -0.107369856, -0.521548361, -0.006441454, 1.449292259, -0.379880011, 0.155541969, -0.097848704, 0.069012178, -0.328707341, -0.314440108, -0.242816008, 0.191509955, -0.161435002, ],
        // fill: false,
        borderColor: '#64A5D3',
        pointRadius: 0,

    },{
        label: '포테토칩 오리지널',
        data: [1.429767129, 1.262305557, 0.937953579, 0.713118334, 0.652346249, 0.64048554, 0.528281017, 0.417878208, 0.349403663, 0.340411365, -0.144337567, -0.254624675, -0.295525991, -0.317047574, -0.32571662, -0.358727606, -0.409449778, -0.428203607, -0.559004914, -0.560891366, -0.57518125, -0.576990373, -0.650757494, -0.660333518, -0.691397056, -0.734052047, -0.761103683, -0.888479551, -1.119441715, ],
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
