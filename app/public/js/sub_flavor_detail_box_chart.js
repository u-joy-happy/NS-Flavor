function randomValues(count, min, max) {
    const delta = max - min;
    return Array.from({ length: count }).map(() => Math.random() * delta + min);
}

const boxData = {
    // define label tree
    labels: ['January'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: 'rgba(255,0,0,0.5)',
        borderColor: 'red',
        borderWidth: 1,
        outlierColor: '#999999',
        padding: 10,
        itemRadius: 0,
        data: [
            randomValues(100, 0, 100),
        ]
    },]
};

// config 
const config = {
    type: 'boxplot',
    boxData,
    options: {
        indexAxis: 'y',
    }
};

// render init block
new Chart(
    document.getElementById('flavor-box-plot'),
    config
);

