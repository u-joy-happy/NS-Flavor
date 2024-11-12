
var data = {
    labels: ['Slightly-Spicy', 'Pine', 'Woody', 'Sulfurous', 'Nutty', 'Balsamic', 'Vanilla', 'Rancid', 'Mushroom', 'Fishy', 'Buttery', 'Warm-Spicy', 'Citrus', 'Fatty', 'Herbal', 'Earthy', 'Creamy', 'Sour', 'Floral', 'Sweet', 'Fresh', 'Pungent', 'Savory', 'Malty', 'Meaty', 'Green', 'Fruity', 'Caramel', 'Roasted', ],
    datasets: [{
        label: '포테토칩 오리지널',
        data: [-0.317047574, -0.576990373, -0.559004914, 1.429767129, 0.713118334, -0.144337567, -0.254624675, -0.295525991, -0.358727606, -0.428203607, -0.57518125, -0.409449778, -0.734052047, -0.32571662, -0.650757494, -0.560891366, -0.660333518, -0.761103683, -0.888479551, 0.417878208, -0.691397056, -1.119441715, 0.937953579, 1.262305557, 0.340411365, 0.528281017, 0.349403663, 0.652346249, 0.64048554, ],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: '치오 팝칩 파프리카',
        data: [3.582611749, 2.620967475, 1.733656793, -0.67187772, -1.400427414, -0.144337567, -0.254624675, -0.295525991, -0.358727606, -0.428203607, 1.467184623, 1.287310982, 1.079485202, 1.041552475, 0.997576682, 0.808400714, 0.226546999, 0.149390084, 0.098920538, -0.010306072, -0.014667987, -0.034324818, -0.460236458, -0.583339719, -0.731611011, -1.02475514, -1.060295781, -1.086285866, -1.123403385, ],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};


var layout = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                // borderWidth: 3
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }

}


const radarArea = document.getElementById('compare-plot');
new Chart(radarArea, layout);
