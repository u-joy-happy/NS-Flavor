var values = [3.145295831, 2.419495226, 2.016272668, 1.693694621, 1.429767129, 1.209827551, 1.209827551, 1.209827551, 0.864208216, 0.604993714, 0.604993714, 0.498258331, 0.403382435, 0.403382435, 0.318493475, 0.242093412, 0.110129665, 0.110129665, 0.110129665, 0.000159877, 0.000159877, 0.000159877, -0.134247643, -0.134247643, -0.172649791, -0.241773658, -0.241773658, -0.302257042, -0.302257042, -0.302257042, -0.329749489, -0.355624733, -0.445507161, -0.518269127, -0.549689066, -0.549689066, -0.628867314, -0.628867314, -0.67187772, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798, -1.209507798,]
var labels = ['워커스 치즈 양파', '워커스 레디 솔트', '양파링', '감자깡', '포테토칩 오리지널', '포카칩 오리지널', '수미칩 오리지널', '레이즈 구운새우와 해산물소스', '워커스 소금 식초', '워커스 새우', '레이즈 클래식', '포테토칩 고추장마요맛', '양파깡', '아미카 알프레도 오리지널러플', '매운새우깡', '예감 치즈그라탕맛', '포스틱', '레이즈 소금 & 식초', '레이즈 미엥캄 향신료맛', '알새우칩', '스미스 소금 & 식초', '먹태깡 청양마요맛', '헌터스 블랙트러플 포테이토칩', '레이즈 인도매직마살라', '새우깡', '허니버터칩', '포테토칩 먹태청양마요맛', '크로키 감자칩 파프리카', '빵부장 소금빵', '레이즈 요피맛', '티카 칩스 파타고니아', '아미카 엘도라다', '빵부장 라즈베리맛', '토레스 셀렉타 블랙트러플', '치오 토릴라 나초치즈', '무뚝뚝감자칩 통후추소금맛', '트릴라 칩스', '타키스 케틀즈 푸에고', '치오 팝칩 파프리카', '프링글스 오리지널', '프링글스 사워크림 & 어니언', '포테토칩 트리플치즈', '타키스 케틀즈 하바네로 퓨리', '조청유과', '인디안밥', '바나나킥', '로렌즈 로즈마리', '레이즈 맥스 칠리', '꿀꽈배기',]
var binSize = 1;
var minBin = -1.5;
var maxBin = 3.5;

// 각 구간의 빈도수 계산
const calculateBinFrequencies = (data, binSize, minBin, maxBin) => {
    const bins = [];
    for (let i = minBin; i <= maxBin; i += binSize) {
        bins.push({ range: i.toFixed(1), count: 0 });
    }

    data.forEach(value => {
        const index = Math.floor((value - minBin) / binSize);
        if (index >= 0 && index < bins.length) {
            bins[index].count += 1;
        }
    });

    return bins;
};

const flavorDetailbins = calculateBinFrequencies(values, binSize, minBin, maxBin);

// Chart.js용 데이터 준비
var dataLabels = flavorDetailbins.map(bin => bin.range);
var dataValues = flavorDetailbins.map(bin => bin.count);


var data = {
    labels: dataLabels,
    datasets: [{
        // label: 'My First Dataset',
        data: dataValues,
        fill: false,
        borderColor: '#38ABF2',
        tension: 0.4,
        pointRadius: 0,
    }]
};


var layout = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false                     // X축의 그리드 라인 없애기
                },
            },
            y: {
                grid: {
                    display: false                     // Y축의 그리드 라인 없애기
                },
            },
        },
    },
}

const lineArea = document.getElementById('flavor-line-plot');
new Chart(lineArea, layout);
