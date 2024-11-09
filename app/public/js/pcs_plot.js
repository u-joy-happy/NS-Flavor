

var x = [-5, -3, 1, 2, 3, 4, -2, 3, -1]
var y = [3, -2, 4, -4, 5, -1, -3, 2, -5]

const targetData = [{
    x: x,
    y: y
}]
const initialAnnotations = [];
const targetAnnotations = [];


var colorscale = [
    ['1.0', 'rgb(49,54,149)']
    ['0.888888888889', 'rgb(69,117,180)'],
    ['0.777777777778', 'rgb(116,173,209)'],
    ['0.666666666667', 'rgb(171,217,233)'],
    ['0.555555555556', 'rgb(224,243,248)'],
    ['0.444444444444', 'rgb(254,224,144)'],
    ['0.333333333333', 'rgb(253,174,97)'],
    ['0.222222222222', 'rgb(244,109,67)'],
    ['0.111111111111', 'rgb(215,48,39)'],
    ['0.0', 'rgb(165,0,38)'],
];

function rand(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// 방사형 선을 생성
for (let i = 0; i < 15; i++) {
    const x1 = rand(-5, 5);
    const y1 = rand(-5, 5);
    // const arrowEndX = x1 + 0.5 * x1;
    // const arrowEndY = y1 + 0.5 * y1;

    initialAnnotations.push({
        x: 0,
        y: 0,
        ax: 0,
        ay: 0,
        xref: 'x',
        yref: 'y',
        axref: 'x',
        ayref: 'y',
        showarrow: true,
        arrowhead: 2,
        arrowsize: 1,
        // arrowwidth: 2,
        arrowcolor: '#BCD955',
        standoff: 0,  // 화살표를 중심에서 시작하게 설정
        // text: i,  // 화살표 끝에 레이블 추가
        font: {
            size: 12,
            color: 'black'
        },
        xanchor: 'center',
        yanchor: 'center',  // 레이블을 화살표 끝에 붙이기 위해 위쪽으로 조정
    });

    targetAnnotations.push({
        x: x1,
        y: y1,
        ax: 0,
        ay: 0,
        xref: 'x',
        yref: 'y',
        axref: 'x',
        ayref: 'y',
        showarrow: true,
        arrowhead: 2,
        arrowsize: 1,
        // arrowwidth: 2,
        arrowcolor: '#BCD955',
        standoff: 0,  // 화살표를 중심에서 시작하게 설정
        // text: i,  // 화살표 끝에 레이블 추가
        font: {
            size: 12,
            color: 'black'
        },
        xanchor: 'center',
        yanchor: 'center',  // 레이블을 화살표 끝에 붙이기 위해 위쪽으로 조정
    });

    // annotations.push({
    //     x: x1,
    //     y: y1,
    //     ax: 0,
    //     ay: 0,
    //     xref: 'x',
    //     yref: 'y',
    //     axref: 'x',
    //     ayref: 'y',
    //     showarrow: true,
    //     arrowhead: 2, // 화살표 모양
    //     arrowsize: 1,
    //     arrowwidth: 2,
    //     arrowcolor: '#49789c',
    //     standoff: 0, // 중심에 정확히 붙여서 화살표 시작
    //     text: 'text' + i,
    //     font: {
    //         size: 12,
    //         color: 'black'
    //     },
    //     // align: 'center',
    //     xanchor: 'center',          // 텍스트의 위치를 약간 조정하여 화살표 끝에 맞춤
    //     yanchor: 'top'
    // });

}

var data = [{
    x: Array(9).fill(0), // 처음에는 모든 점을 x = 0에 배치
    y: Array(9).fill(0), // 처음에는 모든 점을 y = 0에 배치
    mode: 'markers',
    marker: {
        size: 12,
        color: x,
        colorscale: colorscale,
        // cmin: -6,
        // cmax: 6,
        opacity: 0.7,
    }
}];

var layout = {
    xaxis: {
        fixedrange: true,
        zeroline: false,
        // linecolor: '#ccc',
        // linewidth: 1,
        range: [-7, 7] ,

    },
    yaxis: {
        fixedrange: true,
        zeroline: false,
        range: [-7, 7] ,
    },
    margin: {
        l: 30,
        r: 30,
        t: 30,
        b: 30,
        pad: 0
    },
    annotations: initialAnnotations,
    // title: {
    //     text: '<b>NONGSHIM always find a better Flavor</b>',
    //     font: {
    //         family: 'sans-serif',
    //         size: 28
    //     },
    // },
};

// Plotly.newPlot('pca-plot', data, layout);

Plotly.newPlot('pca-plot-inner', data, layout).then(() => {
    // 애니메이션 실행
    Plotly.animate('pca-plot-inner', {
        data: targetData,
        layout: { annotations: targetAnnotations },
        traces: [0]
    }, {
        transition: { duration: 1000 },
        frame: { duration: 1000, redraw: false }
    });
});




