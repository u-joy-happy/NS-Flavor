var values = [3.277690962, 2.620967475, 2.506754695, 1.772529679, 1.735818428, 1.665733313, 1.665733313, 1.105052391, 0.597769653, 0.450924649, 0.450924649, 0.409808049, 0.336711869, 0.336711869, 0.170584189, -0.063032862, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, -0.576990373, ]
var labels = ['워커스 새우', '치오 팝칩 파프리카', '스미스 소금 & 식초', '로렌즈 로즈마리', '레이즈 요피맛', '레이즈 미엥캄 향신료맛', '무뚝뚝감자칩 통후추소금맛', '치오 토릴라 나초치즈', '레이즈 맥스 칠리', '레이즈 구운새우와 해산물소스', '타키스 케틀즈 하바네로 퓨리', '타키스 케틀즈 푸에고', '레이즈 인도매직마살라', '헌터스 블랙트러플 포테이토칩', '티카 칩스 파타고니아', '먹태깡 청양마요맛', '감자깡', '꿀꽈배기', '레이즈 소금 & 식초', '레이즈 클래식', '매운새우깡', '바나나킥', '빵부장 라즈베리맛', '빵부장 소금빵', '새우깡', '수미칩 오리지널', '아미카 알프레도 오리지널러플', '아미카 엘도라다', '알새우칩', '양파깡', '양파링', '예감 치즈그라탕맛', '워커스 레디 솔트', '워커스 소금 식초', '워커스 치즈 양파', '인디안밥', '조청유과', '크로키 감자칩 파프리카', '토레스 셀렉타 블랙트러플', '트릴라 칩스', '포스틱', '포카칩 오리지널', '포테토칩 고추장마요맛', '포테토칩 먹태청양마요맛', '포테토칩 오리지널', '포테토칩 트리플치즈', '프링글스 사워크림 & 어니언', '프링글스 오리지널', '허니버터칩', ]
var binSize = 0.5;
var minBin = -1.0;
var maxBin = 3.5;

const flavorCompareDetailbins = calculateBinFrequencies(values, binSize, minBin, maxBin);

// Chart.js용 데이터 준비
var dataLabels = flavorCompareDetailbins.map(bin => bin.range);
var dataValues = flavorCompareDetailbins.map(bin => bin.count);

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
        // maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false                     // X축의 그리드 라인 없애기
                },
                ticks: {
                    // display: false                     // X축 레이블 숨기기 (필요한 경우)
                }
            },
            y: {
                grid: {
                    display: false                     // Y축의 그리드 라인 없애기
                },
                ticks: {
                    // display: false                     // Y축 레이블 없애기
                }
            },
        },
    },
}

const compareLineArea = document.getElementById('flavor-compare-line-plot');
new Chart(compareLineArea, layout);
