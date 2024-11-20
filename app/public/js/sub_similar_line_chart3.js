
var data = {
    labels: ['Caramel', 'Citrus', 'Earthy', 'Floral', 'Fruity', 'Green', 'Herbal', 'Malty', 'Meaty', 'Mushroom', 'Nutty', 'Pine', 'Pungent', 'Roasted', 'Savory', 'Sour', 'Sulfurous', 'Sweet', 'Woody', 'Buttery', 'Creamy', 'Rancid', 'Fresh', 'Vanilla', 'Fishy', 'Fatty', 'Warm-Spicy', 'Slightly-Spicy', 'Balsamic', ],
    datasets: [{
        label: '제품군집',
        data: [0.461983851, -0.314440108, 1.449292259, 0.191509955, 0.038860239, 0.315677581, -0.097848704, -0.268679039, -0.068475495, 2.688888095, 0.265132109, 0.155541969, -0.161435002, 0.247048229, -0.012505512, -0.242816008, -0.646430375, -0.474995242, -0.006441454, -0.379880011, 0.069012178, 0.207785418, -0.328707341, 1.19799093, -0.521548361, -0.056999951, -0.107369856, 0.109524711, -0.138675049, ],
        // fill: false,
        borderColor: '#64A5D3',
        pointRadius: 0,

    },{
        label: '포카칩 오리지널',
        data: [2.101206345, 0.082039715, -0.560891366, -0.888479551, 1.562159802, 1.002088658, -0.650757494, 1.00276169, 1.84794283, -0.358727606, 0.459492845, -0.576990373, -1.119441715, 0.39243866, 2.904158319, -0.761103683, 1.209827551, 0.931699344, -0.559004914, -0.57518125, -0.660333518, -0.295525991, -0.691397056, -0.254624675, -0.428203607, -0.32571662, -0.409449778, -0.317047574, -0.144337567, ],
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

const simLineArea3 = document.getElementById('similar-plot3');
new Chart(simLineArea3, layout);
