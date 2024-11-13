window.onload = function () {
    const prdBtn = document.getElementById("prd-btn");
    const prdBtn2 = document.getElementById("prd-btn2");
    const detailBtn = document.getElementById("detail-btn");
    const compareBtn = document.getElementById("compare-btn");
    const compareReportBtn = document.getElementById("compare-report-btn");
    const similarBtn = document.getElementById("similar-btn");
    const similarChartBtn = document.getElementById("similar-chart-btn");
    const flavorBtn = document.getElementById("flavor-btn");
    const flavorReportBtn = document.getElementById("flavor-report-btn");

    const overlay1 = document.getElementById("overlay1");
    const overlay2 = document.getElementById("overlay2");
    const body = document.getElementById("body");

    const closeBtn = document.getElementById("sub-detail-close");
    const closeSimilarBtn = document.getElementById("sub-similar-close");
    const closeSimilarChartBtn = document.getElementById("sub-similar-chart-close");
    const closeCompareBtn = document.getElementById("sub-compare-close");
    const closeCompareReportBtn = document.getElementById("sub-compare-report-close");
    const closeReportBtn = document.getElementById("sub-report-close");

    const prdCircle = document.getElementById("prd-scatter-circle");
    const prdCircle2 = document.getElementById("prd-scatter-circle2");
    const prdMenu = document.getElementById("prd-scatter-menu-cont");
    const prdMenu2 = document.getElementById("prd-scatter-menu-cont2");
    const subDetail = document.getElementById("sub-detail");
    const subSimilar = document.getElementById("sub-similar");
    const subSimilarChart = document.getElementById("sub-similar-chart");
    const subCompare = document.getElementById("sub-compare");
    const subFlavorDetail = document.getElementById("sub-flavor-detail");
    const subCompareFlavor = document.getElementById("sub-flavor-compare");

    const detailMixedInfo = document.getElementById("detail-mixed-info");
    const detailMixedFlavorInfo = document.getElementById("detail-mixed-flavor-info");


    prdBtn.addEventListener("click", (event) => {
        prdCircle2.style.display = "none";
        prdMenu2.style.display = "none";

        prdCircle.style.display = "block";
        prdMenu.style.display = "block";
        event.stopPropagation();
    });

    prdCircle.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    prdMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    prdBtn2.addEventListener("click", (event) => {
        prdCircle.style.display = "none";
        prdMenu.style.display = "none";

        prdCircle2.style.display = "block";
        prdMenu2.style.display = "block";
        event.stopPropagation();
    });

    prdCircle2.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    prdMenu2.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    body.addEventListener("click", () => {
        if (getComputedStyle(prdCircle).display == "block") {
            prdCircle.style.display = "none";
            prdMenu.style.display = "none";
        } else if (getComputedStyle(prdCircle2).display == "block") {
            prdCircle2.style.display = "none";
            prdMenu2.style.display = "none";
        }
    });

    detailBtn.addEventListener("click", () => {
        overlay1.style.display = "block";
        subDetail.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        overlay1.style.display = "none";
        subDetail.style.display = "none";
        detailMixedInfo.style.display = "block";
        detailMixedFlavorInfo.style.display = "none";
    });

    similarBtn.addEventListener("click", () => {
        overlay1.style.display = "block";
        subSimilar.style.display = "block";
    });

    closeSimilarBtn.addEventListener("click", () => {
        overlay1.style.display = "none";
        subSimilar.style.display = "none";
    });

    similarChartBtn.addEventListener("click", () => {
        overlay1.style.display = "block";
        subSimilarChart.style.display = "block";
    });

    closeSimilarChartBtn.addEventListener("click", () => {
        overlay1.style.display = "none";
        subSimilarChart.style.display = "none";
    });

    compareBtn.addEventListener("click", () => {
        overlay1.style.display = "block";
        subCompare.style.display = "block";
    });

    closeCompareBtn.addEventListener("click", () => {
        overlay1.style.display = "none";
        subCompare.style.display = "none";
    });


    flavorBtn.addEventListener("click", () => {
        if (getComputedStyle(detailMixedInfo).display === "block") {
            detailMixedInfo.style.display = "none";
            detailMixedFlavorInfo.style.display = "block";
            flavorBtn.classList.add("active");
        } else {
            detailMixedInfo.style.display = "block";
            detailMixedFlavorInfo.style.display = "none";
            flavorBtn.classList.remove("active");
        }
    });

    flavorReportBtn.addEventListener("click", () => {
        overlay2.style.display = "block";
        subFlavorDetail.style.display = "block";
    });

    closeReportBtn.addEventListener("click", () => {
        overlay2.style.display = "none";
        subFlavorDetail.style.display = "none";
    });

    compareReportBtn.addEventListener("click", () => {
        overlay2.style.display = "block";
        subCompareFlavor.style.display = "block";
    });

    closeCompareReportBtn.addEventListener("click", () => {
        overlay2.style.display = "none";
        subCompareFlavor.style.display = "none";
    });


    const checkboxes = document.querySelectorAll('.table-checkbox');
    const compareButton = document.getElementById('compare-btn');
    const warningText = document.getElementById('warning-text');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonState);
    });

    function updateButtonState() {
        const checkedCount = document.querySelectorAll('.table-checkbox:checked').length;

        if (checkedCount === 2) {
            compareButton.disabled = false;
            warningText.style.display = 'none';
        } else {
            compareButton.disabled = true;

            if (checkedCount > 2) {
                warningText.style.display = 'block';
            } else {
                warningText.style.display = 'none';
            }
        }
    }
}
